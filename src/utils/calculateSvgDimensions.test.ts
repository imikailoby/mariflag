import { DEFAULT_SVG_CONFIG } from '../config/svgConfig';
import { defaultIcons } from '../constants/defaultIcons';
import { calculateSvgDimensions } from './calculateSvgDimensions';

describe('calculateSvgDimensions()', () => {
  it('calculates correct SVG dimensions for horizontal orientation', () => {
    expect(
      calculateSvgDimensions([defaultIcons.A, defaultIcons.B, defaultIcons.C], 'horizontal', DEFAULT_SVG_CONFIG.offset),
    ).toEqual({
      width: 48 * 3 + DEFAULT_SVG_CONFIG.offset * 2,
      height: 48,
    });
  });

  it('calculates correct SVG dimensions for vertical orientation', () => {
    expect(
      calculateSvgDimensions([defaultIcons.A, defaultIcons.B, defaultIcons.C], 'vertical', DEFAULT_SVG_CONFIG.offset),
    ).toEqual({
      width: 48,
      height: 48 * 3 + DEFAULT_SVG_CONFIG.offset * 2,
    });
  });

  it('calculates correct SVG dimensions for custom offset', () => {
    expect(calculateSvgDimensions([defaultIcons.A, defaultIcons.B, defaultIcons.C], 'horizontal', 0)).toEqual({
      width: 48 * 3,
      height: 48,
    });

    expect(calculateSvgDimensions([defaultIcons.A, defaultIcons.B, defaultIcons.C], 'vertical', 64)).toEqual({
      width: 48,
      height: 48 * 3 + 64 * 2,
    });
  });

  it('calculates correct SVG dimensions for the elements with different sizes', () => {
    const elements = [
      '<svg width="10" height="100" />',
      '<svg width="120" height="15" />',
      '<svg width="75" height="82" />',
    ];
    expect(calculateSvgDimensions(elements, 'horizontal', DEFAULT_SVG_CONFIG.offset)).toEqual({
      width: 120 + 75 + 10 + DEFAULT_SVG_CONFIG.offset * 2,
      height: 100,
    });
    expect(calculateSvgDimensions(elements, 'vertical', DEFAULT_SVG_CONFIG.offset)).toEqual({
      width: 120,
      height: 100 + 15 + 82 + DEFAULT_SVG_CONFIG.offset * 2,
    });
  });
});
