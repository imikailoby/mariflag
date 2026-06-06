import { namespaceSvgIds } from './namespaceSvgIds';

describe('namespaceSvgIds()', () => {
  it('suffixes ids and their url(#) references with the index', () => {
    const svg = '<svg><mask id="a"/><path mask="url(#a)"/></svg>';
    expect(namespaceSvgIds(svg, 0)).toBe('<svg><mask id="a-0"/><path mask="url(#a-0)"/></svg>');
    expect(namespaceSvgIds(svg, 3)).toBe('<svg><mask id="a-3"/><path mask="url(#a-3)"/></svg>');
  });

  it('suffixes href and xlink:href references', () => {
    const svg = '<svg><path id="p"/><use href="#p"/><use xlink:href="#p"/></svg>';
    expect(namespaceSvgIds(svg, 1)).toBe('<svg><path id="p-1"/><use href="#p-1"/><use xlink:href="#p-1"/></svg>');
  });

  it('namespaces multiple distinct ids independently', () => {
    const svg = '<svg><clipPath id="a"/><mask id="b"/><path clip-path="url(#a)" mask="url(#b)"/></svg>';
    expect(namespaceSvgIds(svg, 2)).toBe(
      '<svg><clipPath id="a-2"/><mask id="b-2"/><path clip-path="url(#a-2)" mask="url(#b-2)"/></svg>',
    );
  });

  it('leaves elements without ids unchanged', () => {
    const svg = '<svg width="10" height="10"><path/></svg>';
    expect(namespaceSvgIds(svg, 5)).toBe(svg);
  });

  it('does not touch references to ids that are not defined in the element', () => {
    const svg = '<svg><use href="#external"/></svg>';
    expect(namespaceSvgIds(svg, 0)).toBe(svg);
  });
});
