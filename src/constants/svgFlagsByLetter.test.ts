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
});
