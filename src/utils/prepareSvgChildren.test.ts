import { DEFAULT_CONFIG } from '../constants/config';
import { prepareSvgChildren } from './prepareSvgChildren';

const ELEMENTS = ['<svg width="48" height="48"/>', '<svg width="48" height="48"/>', '<svg width="48" height="48"/>'];

describe('prepareSvgChildren()', () => {
  it('returns an array with SVG elements with a correct offset for the horizontal orientation', () => {
    const result = prepareSvgChildren(ELEMENTS, 'horizontal', DEFAULT_CONFIG.offset);
    expect(result).toEqual([
      '<g transform="translate(0, 0)"><svg width="48" height="48"/></g>',
      '<g transform="translate(64, 0)"><svg width="48" height="48"/></g>',
      '<g transform="translate(128, 0)"><svg width="48" height="48"/></g>',
    ]);
  });

  it('returns an array with SVG elements with a correct offset for the vertical orientation', () => {
    const result = prepareSvgChildren(ELEMENTS, 'vertical', DEFAULT_CONFIG.offset);
    expect(result).toEqual([
      '<g transform="translate(0, 0)"><svg width="48" height="48"/></g>',
      '<g transform="translate(0, 64)"><svg width="48" height="48"/></g>',
      '<g transform="translate(0, 128)"><svg width="48" height="48"/></g>',
    ]);
  });

  it('sets correct custom offset', () => {
    const result = prepareSvgChildren(ELEMENTS, 'horizontal', 0);
    expect(result).toEqual([
      '<g transform="translate(0, 0)"><svg width="48" height="48"/></g>',
      '<g transform="translate(48, 0)"><svg width="48" height="48"/></g>',
      '<g transform="translate(96, 0)"><svg width="48" height="48"/></g>',
    ]);
  });

  it('sets correct offset when elements have different sizes', () => {
    const customElements = [
      '<svg width="48" height="48"/>',
      '<svg width="96" height="96"/>',
      '<svg width="24" height="24"/>',
    ];
    const resultHorizontal = prepareSvgChildren(customElements, 'horizontal', DEFAULT_CONFIG.offset);
    expect(resultHorizontal).toEqual([
      '<g transform="translate(0, 0)"><svg width="48" height="48"/></g>',
      '<g transform="translate(64, 0)"><svg width="96" height="96"/></g>',
      '<g transform="translate(176, 0)"><svg width="24" height="24"/></g>',
    ]);
    const resultVertical = prepareSvgChildren(customElements, 'vertical', DEFAULT_CONFIG.offset);
    expect(resultVertical).toEqual([
      '<g transform="translate(0, 0)"><svg width="48" height="48"/></g>',
      '<g transform="translate(0, 64)"><svg width="96" height="96"/></g>',
      '<g transform="translate(0, 176)"><svg width="24" height="24"/></g>',
    ]);
  });
});
