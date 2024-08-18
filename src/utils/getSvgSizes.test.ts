import { DEFAULT_CONFIG } from '../constants/config';
import {
  DEFAULT_F_SVG_H_HEIGHT,
  DEFAULT_F_SVG_H_WIDTH,
  DEFAULT_F_SVG_V_HEIGHT,
  DEFAULT_F_SVG_V_WIDTH,
} from '../constants/sizes';
import { getSvgSizes } from './getSvgSizes';

describe('getSvgSizes()', () => {
  it('returns correct sizes for horizontal orientation', () => {
    Array.from({ length: 10 }).forEach((_, index) => {
      expect(getSvgSizes(index + 1, 'horizontal', DEFAULT_CONFIG.offset)).toEqual({
        width: DEFAULT_F_SVG_H_WIDTH * (index + 1) + DEFAULT_CONFIG.offset * index,
        height: DEFAULT_F_SVG_H_HEIGHT,
      });
    });
  });

  it('returns correct sizes for vertical orientation', () => {
    Array.from({ length: 10 }).forEach((_, index) => {
      expect(getSvgSizes(index + 1, 'vertical', DEFAULT_CONFIG.offset)).toEqual({
        width: DEFAULT_F_SVG_V_WIDTH,
        height: DEFAULT_F_SVG_V_HEIGHT * (index + 1) + DEFAULT_CONFIG.offset * index,
      });
    });
  });

  it('returns correct sizes for custom offset', () => {
    expect(getSvgSizes(2, 'horizontal', 32)).toEqual({
      width: DEFAULT_F_SVG_H_WIDTH * 2 + 32,
      height: DEFAULT_F_SVG_H_HEIGHT,
    });

    expect(getSvgSizes(3, 'vertical', 64)).toEqual({
      width: DEFAULT_F_SVG_V_WIDTH,
      height: DEFAULT_F_SVG_V_HEIGHT * 3 + 64 * 2,
    });
  });
});
