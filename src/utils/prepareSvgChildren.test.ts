import { DEFAULT_CONFIG } from '../constants/config';
import { prepareSvgChildren } from './prepareSvgChildren';

const ELEMENTS = ['<svg width="48" height="48"/>', '<svg width="48" height="48"/>', '<svg width="48" height="48"/>'];

describe('prepareSvgChildren()', () => {
  it('returns an array with SVG elements with a correct offset for the horizontal orientation', () => {
    const result = prepareSvgChildren(ELEMENTS, 'horizontal', DEFAULT_CONFIG.offset);
    expect(result).toEqual([
      '<svg x="0" y="0" width="48" height="48"/>',
      '<svg x="64" y="0" width="48" height="48"/>',
      '<svg x="128" y="0" width="48" height="48"/>',
    ]);
  });

  it('returns an array with SVG elements with a correct offset for the vertical orientation', () => {
    const result = prepareSvgChildren(ELEMENTS, 'vertical', DEFAULT_CONFIG.offset);
    expect(result).toEqual([
      '<svg x="0" y="0" width="48" height="48"/>',
      '<svg x="0" y="64" width="48" height="48"/>',
      '<svg x="0" y="128" width="48" height="48"/>',
    ]);
  });

  it('sets correct custom offset', () => {
    const result = prepareSvgChildren(ELEMENTS, 'horizontal', 0);
    expect(result).toEqual([
      '<svg x="0" y="0" width="48" height="48"/>',
      '<svg x="48" y="0" width="48" height="48"/>',
      '<svg x="96" y="0" width="48" height="48"/>',
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
      '<svg x="0" y="0" width="48" height="48"/>',
      '<svg x="64" y="0" width="96" height="96"/>',
      '<svg x="176" y="0" width="24" height="24"/>',
    ]);
    const resultVertical = prepareSvgChildren(customElements, 'vertical', DEFAULT_CONFIG.offset);
    expect(resultVertical).toEqual([
      '<svg x="0" y="0" width="48" height="48"/>',
      '<svg x="0" y="64" width="96" height="96"/>',
      '<svg x="0" y="176" width="24" height="24"/>',
    ]);
  });
});
