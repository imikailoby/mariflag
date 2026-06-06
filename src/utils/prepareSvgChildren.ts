import type { Orientation } from '../types/config';
import { extractElementSizes } from './extractElementSizes';

const INITIAL_OFFSET = 0;

export function prepareSvgChildren(elements: string[], orientation: Orientation, offset: number): string[] {
  let cursor = INITIAL_OFFSET;

  return elements.map((element) => {
    const { width, height } = extractElementSizes(element);
    const positioned =
      orientation === 'horizontal'
        ? applyCoordinates(element, cursor, INITIAL_OFFSET)
        : applyCoordinates(element, INITIAL_OFFSET, cursor);

    cursor += (orientation === 'horizontal' ? width : height) + offset;
    return positioned;
  });
}

function applyCoordinates(element: string, x: number, y: number): string {
  return updateCoordinate(updateCoordinate(element, 'y', y), 'x', x);
}

function updateCoordinate(element: string, coordinate: 'x' | 'y', value: number): string {
  const regex = new RegExp(`(<svg[^>]*\\s)${coordinate}="[^"]*"`);

  if (regex.test(element)) {
    return element.replace(regex, `$1${coordinate}="${value}"`);
  }

  return element.replace(/^<svg/, `<svg ${coordinate}="${value}"`);
}
