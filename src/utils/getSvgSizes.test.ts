import { DEFAULT_CONFIG } from '../constants/config';
import { svgFlagsByLetter } from '../constants/svgFlagsByLetter';
import { getSvgSizes } from './getSvgSizes';

describe('getSvgSizes()', () => {
  it('returns correct sizes for horizontal orientation', () => {
    expect(
      getSvgSizes([svgFlagsByLetter.A, svgFlagsByLetter.B, svgFlagsByLetter.C], 'horizontal', DEFAULT_CONFIG.offset),
    ).toEqual({
      width: 48 * 3 + DEFAULT_CONFIG.offset * 2,
      height: 48,
    });
  });

  it('returns correct sizes for vertical orientation', () => {
    expect(
      getSvgSizes([svgFlagsByLetter.A, svgFlagsByLetter.B, svgFlagsByLetter.C], 'vertical', DEFAULT_CONFIG.offset),
    ).toEqual({
      width: 48,
      height: 48 * 3 + DEFAULT_CONFIG.offset * 2,
    });
  });

  it('returns correct sizes for custom offset', () => {
    expect(getSvgSizes([svgFlagsByLetter.A, svgFlagsByLetter.B, svgFlagsByLetter.C], 'horizontal', 0)).toEqual({
      width: 48 * 3,
      height: 48,
    });

    expect(getSvgSizes([svgFlagsByLetter.A, svgFlagsByLetter.B, svgFlagsByLetter.C], 'vertical', 64)).toEqual({
      width: 48,
      height: 48 * 3 + 64 * 2,
    });
  });

  it('returns correct sizes for the elements with different sizes', () => {
    const elements = [
      '<svg width="10" height="100" />',
      '<svg width="120" height="15" />',
      '<svg width="75" height="82" />',
    ];
    expect(getSvgSizes(elements, 'horizontal', DEFAULT_CONFIG.offset)).toEqual({
      width: 120 + 75 + 10 + DEFAULT_CONFIG.offset * 2,
      height: 100,
    });
    expect(getSvgSizes(elements, 'vertical', DEFAULT_CONFIG.offset)).toEqual({
      width: 120,
      height: 100 + 15 + 82 + DEFAULT_CONFIG.offset * 2,
    });
  });
});
