import { DEFAULT_CONFIG } from '../constants/config';
import { buildSvg } from './buildSvg';

// Compact stand-ins for the default icons. ICON_A/ICON_B carry an internal id to
// exercise namespacing; ICON_C is id-free for plain layout assertions.
const ICON_A = '<svg width="48" height="48"><mask id="a"/><path mask="url(#a)"/></svg>';
const ICON_B = '<svg width="48" height="48"><mask id="a"/><path mask="url(#a)"/></svg>';
const ICON_C = '<svg width="48" height="48"><path/></svg>';

describe('buildSvg()', () => {
  it('wraps children in a single outer svg sized for the default (horizontal) layout', () => {
    expect(buildSvg([ICON_C, ICON_C, ICON_C], DEFAULT_CONFIG)).toBe(
      '<svg xmlns="http://www.w3.org/2000/svg" width="176px" height="48px">' +
        '<svg x="0" y="0" width="48" height="48"><path/></svg>' +
        '<svg x="64" y="0" width="48" height="48"><path/></svg>' +
        '<svg x="128" y="0" width="48" height="48"><path/></svg>' +
        '</svg>',
    );
  });

  describe('orientation', () => {
    it('lays children along the x axis for horizontal orientation', () => {
      expect(buildSvg([ICON_C, ICON_C], { ...DEFAULT_CONFIG, orientation: 'horizontal' })).toBe(
        '<svg xmlns="http://www.w3.org/2000/svg" width="112px" height="48px">' +
          '<svg x="0" y="0" width="48" height="48"><path/></svg>' +
          '<svg x="64" y="0" width="48" height="48"><path/></svg>' +
          '</svg>',
      );
    });

    it('lays children along the y axis for vertical orientation', () => {
      expect(buildSvg([ICON_C, ICON_C], { ...DEFAULT_CONFIG, orientation: 'vertical' })).toBe(
        '<svg xmlns="http://www.w3.org/2000/svg" width="48px" height="112px">' +
          '<svg x="0" y="0" width="48" height="48"><path/></svg>' +
          '<svg x="0" y="64" width="48" height="48"><path/></svg>' +
          '</svg>',
      );
    });
  });

  describe('offset', () => {
    it('honors a custom offset', () => {
      expect(buildSvg([ICON_C, ICON_C, ICON_C], { ...DEFAULT_CONFIG, offset: 0 })).toBe(
        '<svg xmlns="http://www.w3.org/2000/svg" width="144px" height="48px">' +
          '<svg x="0" y="0" width="48" height="48"><path/></svg>' +
          '<svg x="48" y="0" width="48" height="48"><path/></svg>' +
          '<svg x="96" y="0" width="48" height="48"><path/></svg>' +
          '</svg>',
      );
    });
  });

  it('namespaces duplicate ids so repeated icons do not collide', () => {
    const result = buildSvg([ICON_A, ICON_B], DEFAULT_CONFIG);
    expect(result).toContain('<mask id="a-0"/>');
    expect(result).toContain('mask="url(#a-0)"');
    expect(result).toContain('<mask id="a-1"/>');
    expect(result).toContain('mask="url(#a-1)"');

    const ids = [...result.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('returns a string with an SVG element for the elements with different sizes', () => {
    const elements = [
      '<svg width="10" height="100" />',
      '<svg width="120" height="15" />',
      '<svg width="75" height="82" />',
    ];
    expect(buildSvg(elements, { ...DEFAULT_CONFIG, orientation: 'horizontal' })).toBe(
      '<svg xmlns="http://www.w3.org/2000/svg" width="237px" height="100px"><svg x="0" y="0" width="10" height="100" /><svg x="26" y="0" width="120" height="15" /><svg x="162" y="0" width="75" height="82" /></svg>',
    );
    expect(buildSvg(elements, { ...DEFAULT_CONFIG, orientation: 'vertical' })).toBe(
      '<svg xmlns="http://www.w3.org/2000/svg" width="120px" height="229px"><svg x="0" y="0" width="10" height="100" /><svg x="0" y="116" width="120" height="15" /><svg x="0" y="147" width="75" height="82" /></svg>',
    );
    expect(buildSvg(elements, { ...DEFAULT_CONFIG, orientation: 'horizontal', offset: 10 })).toBe(
      '<svg xmlns="http://www.w3.org/2000/svg" width="225px" height="100px"><svg x="0" y="0" width="10" height="100" /><svg x="20" y="0" width="120" height="15" /><svg x="150" y="0" width="75" height="82" /></svg>',
    );
  });
});
