import {
  DEFAULT_F_SVG_H_HEIGHT,
  DEFAULT_F_SVG_H_OFFSET,
  DEFAULT_F_SVG_H_WIDTH,
  DEFAULT_F_SVG_V_HEIGHT,
  DEFAULT_F_SVG_V_WIDTH,
} from '../constants/sizes';
import { getSvgSizes } from './getSvgSizes';

describe('getSvgSizes()', () => {
  it('returns correct sizes for horizontal orientation', () => {
    Array.from({ length: 10 }).forEach((_, index) => {
      expect(getSvgSizes(index + 1, 'horizontal')).toEqual({
        width: DEFAULT_F_SVG_H_WIDTH * (index + 1) + DEFAULT_F_SVG_H_OFFSET * index,
        height: DEFAULT_F_SVG_H_HEIGHT,
      });
    });
  });

  it('returns correct sizes for vertical orientation', () => {
    Array.from({ length: 10 }).forEach((_, index) => {
      expect(getSvgSizes(index + 1, 'vertical')).toEqual({
        width: DEFAULT_F_SVG_V_WIDTH,
        height: DEFAULT_F_SVG_V_HEIGHT * (index + 1) + DEFAULT_F_SVG_H_OFFSET * index,
      });
    });
  });
});
