import type { Orientation } from '../types/config';
import { normalizeConfig } from './normalizeConfig';

describe('normalizeConfig()', () => {
  it('returns default config when no config is provided', () => {
    expect(normalizeConfig()).toEqual({
      orientation: 'horizontal',
      offset: 16,
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

  describe('offset', () => {
    it('returns default offset when no offset is provided', () => {
      expect(normalizeConfig({}).offset).toBe(16);
      expect(normalizeConfig(undefined).offset).toBe(16);
    });

    it('returns default offset when invalid offset is provided', () => {
      expect(normalizeConfig({ offset: -1 }).offset).toBe(16);
    });

    it('returns provided offset', () => {
      expect(normalizeConfig({ offset: 32 }).offset).toBe(32);
      expect(normalizeConfig({ offset: 0 }).offset).toBe(0);
    });
  });
});
