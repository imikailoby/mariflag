import { defaultIcons } from '../constants/defaultIcons';
import type { Alphabet } from '../types/config';
import { getSvgArrayFromName } from './getSvgArrayFromName';

describe('getSvgArrayFromName()', () => {
  it('returns an array with SVG elements for a given name', () => {
    const result = getSvgArrayFromName(Object.keys(defaultIcons).join('').toLowerCase(), defaultIcons);
    expect(result).toHaveLength(Object.keys(defaultIcons).length);
    result.forEach((svgElement, index) => {
      expect(svgElement).toBe(defaultIcons[Object.keys(defaultIcons)[index] as Alphabet]);
    });
  });

  it('returns an empty array for an empty name', () => {
    expect(getSvgArrayFromName('', defaultIcons)).toEqual([]);
  });

  it('returns an empty array for a name with no SVG letters', () => {
    expect(getSvgArrayFromName('123!@$423423,123842391234', defaultIcons)).toEqual([]);
  });
});
