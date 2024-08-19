import { DEFAULT_CONFIG } from '../constants/config';
import { defaultIcons } from '../constants/defaultIcons';
import type { Alphabet, Orientation } from '../types/config';
import { normalizeConfig } from './normalizeConfig';

describe('normalizeConfig()', () => {
  it('returns default config when no config is provided', () => {
    expect(normalizeConfig()).toEqual({
      orientation: 'horizontal',
      offset: 16,
      customIcons: defaultIcons,
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
      expect(normalizeConfig({ offset: '1' as unknown as number }).offset).toBe(16);
    });

    it('returns provided offset', () => {
      expect(normalizeConfig({ offset: 32 }).offset).toBe(32);
      expect(normalizeConfig({ offset: 0 }).offset).toBe(0);
    });
  });

  describe('custom icons', () => {
    it('returns default icons when no custom icons are provided', () => {
      expect(normalizeConfig({}).customIcons).toEqual(defaultIcons);
      expect(normalizeConfig(undefined).customIcons).toEqual(defaultIcons);
      expect(normalizeConfig({ ...DEFAULT_CONFIG, customIcons: undefined }).customIcons).toEqual(defaultIcons);
      expect(normalizeConfig({ ...DEFAULT_CONFIG, customIcons: {} }).customIcons).toEqual(defaultIcons);
    });

    it('replaces invalid icons with default icons', () => {
      expect(normalizeConfig({ customIcons: { A: 'invalid' } }).customIcons.A).toEqual(defaultIcons.A);
      expect(normalizeConfig({ customIcons: { A: '<svg></svg>' } }).customIcons.A).toEqual(defaultIcons.A);
      expect(normalizeConfig({ customIcons: { A: '<svg width="0" height="10"></svg>' } }).customIcons.A).toEqual(
        defaultIcons.A,
      );
      expect(normalizeConfig({ customIcons: { A: '<svg width="10" height="0"></svg>' } }).customIcons.A).toEqual(
        defaultIcons.A,
      );
      expect(normalizeConfig({ customIcons: { A: '<svg width="10"></svg>' } }).customIcons.A).toEqual(defaultIcons.A);
      expect(normalizeConfig({ customIcons: { A: '<svg height="10"></svg>' } }).customIcons.A).toEqual(defaultIcons.A);
    });

    it('returns provided custom icons', () => {
      const customIcons = { A: '<svg width="10" height="10"></svg>' };
      const result = normalizeConfig({ customIcons });
      expect(result.customIcons.A).toEqual(customIcons.A);

      for (let i = 1; i < Object.keys(defaultIcons).length; i++) {
        const letter = Object.keys(defaultIcons)[i];
        expect(result.customIcons[letter as Alphabet]).toEqual(defaultIcons[letter as Alphabet]);
      }
    });
  });
});
