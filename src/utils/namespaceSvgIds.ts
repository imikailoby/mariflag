const ID_REGEX = /\sid="([^"]+)"/g;

/**
 * Suffixes every `id` defined in an SVG string (and its internal references via
 * `url(#id)` and `href="#id"`) with the element's index. When multiple icons are
 * embedded in a single output SVG this prevents duplicate ids from colliding —
 * per the SVG spec a reference like `url(#a)` resolves to the first matching id
 * in document order, so without this two icons sharing `id="a"` would render
 * against the wrong definition.
 */
export function namespaceSvgIds(element: string, index: number): string {
  const ids = new Set<string>();
  for (const match of element.matchAll(ID_REGEX)) {
    ids.add(match[1]);
  }

  let result = element;
  for (const id of ids) {
    const suffixed = `${id}-${index}`;
    const escaped = escapeRegExp(id);
    result = result
      .replace(new RegExp(`(\\sid=")${escaped}(")`, 'g'), `$1${suffixed}$2`)
      .replace(new RegExp(`(url\\(#)${escaped}(\\))`, 'g'), `$1${suffixed}$2`)
      .replace(new RegExp(`((?:xlink:)?href="#)${escaped}(")`, 'g'), `$1${suffixed}$2`);
  }

  return result;
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
