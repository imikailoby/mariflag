import { DEFAULT_CONFIG } from '../constants/config';
import { prepareSvgChildren } from './prepareSvgChildren';

describe('prepareSvgChildren()', () => {
  it('returns an array with SVG elements with a correct offset for the horizontal orientation', () => {
    const elements = ['<rect/>', '<g/>', '<circle/>'];
    const result = prepareSvgChildren(elements, 'horizontal', DEFAULT_CONFIG.offset);
    expect(result).toEqual([
      '<svg><g transform="translate(0, 0)"><rect/></g></svg>',
      '<svg><g transform="translate(64, 0)"><g/></g></svg>',
      '<svg><g transform="translate(128, 0)"><circle/></g></svg>',
    ]);
  });

  it('returns an array with SVG elements with a correct offset for the vertical orientation', () => {
    const elements = ['<rect/>', '<g/>', '<circle/>'];
    const result = prepareSvgChildren(elements, 'vertical', DEFAULT_CONFIG.offset);
    expect(result).toEqual([
      '<svg><g transform="translate(0, 0)"><rect/></g></svg>',
      '<svg><g transform="translate(0, 64)"><g/></g></svg>',
      '<svg><g transform="translate(0, 128)"><circle/></g></svg>',
    ]);
  });

  it('returns an array with SVG elements with a correct custom offset', () => {
    const elements = ['<rect/>', '<g/>', '<circle/>'];
    const result = prepareSvgChildren(elements, 'horizontal', 0);
    expect(result).toEqual([
      '<svg><g transform="translate(0, 0)"><rect/></g></svg>',
      '<svg><g transform="translate(48, 0)"><g/></g></svg>',
      '<svg><g transform="translate(96, 0)"><circle/></g></svg>',
    ]);
  });
});
