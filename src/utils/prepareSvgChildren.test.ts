import { prepareSvgChildren } from './prepareSvgChildren';

describe('prepareSvgChildren()', () => {
  it('returns an array with SVG elements with a correct offset for the horizontal orientation', () => {
    const elements = ['<rect/>', '<g/>', '<circle/>'];
    const result = prepareSvgChildren(elements, 'horizontal');
    expect(result).toEqual([
      '<svg><g transform="translate(0, 0)"><rect/></g></svg>',
      '<svg><g transform="translate(64, 0)"><g/></g></svg>',
      '<svg><g transform="translate(128, 0)"><circle/></g></svg>',
    ]);
  });

  it('returns an array with SVG elements with a correct offset for the vertical orientation', () => {
    const elements = ['<rect/>', '<g/>', '<circle/>'];
    const result = prepareSvgChildren(elements, 'vertical');
    expect(result).toEqual([
      '<svg><g transform="translate(0, 0)"><rect/></g></svg>',
      '<svg><g transform="translate(0, 64)"><g/></g></svg>',
      '<svg><g transform="translate(0, 128)"><circle/></g></svg>',
    ]);
  });
});
