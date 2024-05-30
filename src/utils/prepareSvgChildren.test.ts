import { prepareSvgChildren } from './prepareSvgChildren';

describe('prepareSvgChildren()', () => {
  it('returns an array with SVG elements with a correct horizontal offset', () => {
    const elements = ['<rect/>', '<g/>', '<circle/>'];
    const result = prepareSvgChildren(elements);
    expect(result).toEqual([
      '<svg><g transform="translate(0, 0)"><rect/></g></svg>',
      '<svg><g transform="translate(64, 0)"><g/></g></svg>',
      '<svg><g transform="translate(128, 0)"><circle/></g></svg>',
    ]);
  });
});
