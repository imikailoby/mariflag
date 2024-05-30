import { DEFAULT_F_SVG_H_WIDTH } from './sizes';
import { svgFlagsByLetter } from './svgFlagsByLetter';

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

describe('svgFlagsByLetter()', () => {
  it('contains all 26 letters of the alphabet', () => {
    expect(Object.keys(svgFlagsByLetter).length).toBe(letters.length);

    for (let i = 0; i < letters.length; i++) {
      const letter = letters[i];
      expect(svgFlagsByLetter[letter]).toBeDefined();
    }
  });

  it('each flag has correct width', () => {
    const widthRegex = /width="(\d+)"/;

    for (let i = 0; i < letters.length; i++) {
      const letter = letters[i];
      const flag = svgFlagsByLetter[letter];
      expect(flag.match(widthRegex)?.[1]).toBe(String(DEFAULT_F_SVG_H_WIDTH));
    }
  });
});
