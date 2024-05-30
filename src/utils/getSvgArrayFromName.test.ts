import { svgFlagsByLetter } from '../constants/svgFlagsByLetter';
import { getSvgArrayFromName } from './getSvgArrayFromName';

describe('getSvgArrayFromName()', () => {
  it('returns an array with SVG elements for a given name', () => {
    const result = getSvgArrayFromName(Object.keys(svgFlagsByLetter).join('').toLowerCase());
    expect(result).toHaveLength(Object.keys(svgFlagsByLetter).length);
    result.forEach((svgElement, index) => {
      expect(svgElement).toBe(svgFlagsByLetter[Object.keys(svgFlagsByLetter)[index]]);
    });
  });

  it('returns an empty array for an empty name', () => {
    expect(getSvgArrayFromName('')).toEqual([]);
  });

  it('returns an empty array for a name with no SVG letters', () => {
    expect(getSvgArrayFromName('123!@$423423,123842391234')).toEqual([]);
  });
});
