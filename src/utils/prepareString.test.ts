import { prepareString } from './prepareString';

describe('prepareString()', () => {
  it('returns a string with only alphabetic characters', () => {
    expect(prepareString(' Hello,    World! 123 #./"@')).toBe('HELLOWORLD');
  });
});
