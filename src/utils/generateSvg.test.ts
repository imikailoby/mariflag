import { generateSvg } from './generateSvg';

describe('generateSvg()', () => {
  it('returns an empty string for empty or non-alphabetic input', () => {
    expect(generateSvg('')).toBe('');
    expect(generateSvg('123 !@#')).toBe('');
  });

  it('wraps the sequence in a single outer svg sized to the horizontal layout', () => {
    // two 48px icons + a 16px offset => 112px wide, 48px tall
    const result = generateSvg('AB');
    expect(result.startsWith('<svg xmlns="http://www.w3.org/2000/svg" width="112px" height="48px">')).toBe(true);
    expect(result.endsWith('</svg>')).toBe(true);
    expect(result).toContain('x="0"');
    expect(result).toContain('x="64"');
  });

  it('lays the sequence out vertically when configured', () => {
    const result = generateSvg('AB', { orientation: 'vertical' });
    expect(result.startsWith('<svg xmlns="http://www.w3.org/2000/svg" width="48px" height="112px">')).toBe(true);
    expect(result).toContain('y="0"');
    expect(result).toContain('y="64"');
  });

  it('namespaces ids so repeated glyphs never produce duplicate ids', () => {
    // the default icon for "A" defines id="a" referenced via url(#a)
    const result = generateSvg('AA');
    expect(result).toContain('id="a-0"');
    expect(result).toContain('id="a-1"');
    expect(result).toContain('url(#a-0)');
    expect(result).toContain('url(#a-1)');

    const ids = [...result.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('renders an exact SVG for custom icons', () => {
    const result = generateSvg('AB', {
      customIcons: {
        A: '<svg width="10" height="10"><rect/></svg>',
        B: '<svg width="20" height="10"><rect/></svg>',
      },
    });
    expect(result).toBe(
      '<svg xmlns="http://www.w3.org/2000/svg" width="46px" height="10px">' +
        '<svg x="0" y="0" width="10" height="10"><rect/></svg>' +
        '<svg x="26" y="0" width="20" height="10"><rect/></svg>' +
        '</svg>',
    );
  });
});
