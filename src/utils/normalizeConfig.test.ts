import type { Orientation } from '../types/config';
import { normalizeConfig } from './normalizeConfig';

describe('normalizeConfig()', () => {
  it('returns default config when no config is provided', () => {
    expect(normalizeConfig()).toEqual({
      orientation: 'horizontal',
    });
  });

  describe('orientation', () => {
    it('returns default orientation when no orientation is provided', () => {
      expect(normalizeConfig({}).orientation).toBe('horizontal');
      expect(normalizeConfig(undefined).orientation).toBe('horizontal');
    });

    it('returns default orientation when invalid orientation is provided', () => {
      expect(normalizeConfig({ orientation: 'invalid' as unknown as Orientation }).orientation).toBe('horizontal');
    });

    it('returns provided orientation', () => {
      expect(normalizeConfig({ orientation: 'vertical' }).orientation).toBe('vertical');
      expect(normalizeConfig({ orientation: 'horizontal' }).orientation).toBe('horizontal');
    });
  });
});
