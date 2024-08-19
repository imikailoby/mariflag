import type { Alphabet } from '../types/config';
import { extractElementSizes } from '../utils/extractElementSizes';
import { defaultIcons } from './defaultIcons';

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

describe('defaultIcons()', () => {
  it('contains all 26 letters of the alphabet', () => {
    expect(Object.keys(defaultIcons).length).toBe(letters.length);

    for (let i = 0; i < letters.length; i++) {
      const letter = letters[i];
      expect(defaultIcons[letter as Alphabet]).toBeDefined();
    }
  });

  it('each icon has width and height', () => {
    for (let i = 0; i < letters.length; i++) {
      const letter = letters[i];
      const svg = defaultIcons[letter as Alphabet];

      const { width, height } = extractElementSizes(svg);

      expect(width).toBeGreaterThan(0);
      expect(height).toBeGreaterThan(0);
    }
  });
});
