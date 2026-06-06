import { DEFAULT_CONFIG } from '../constants/config';
import { defaultIcons } from '../constants/defaultIcons';
import type { Alphabet, MariflagConfig } from '../types/config';
import { extractElementSizes } from './extractElementSizes';

export function normalizeConfig(
  config?: MariflagConfig,
): Omit<Required<MariflagConfig>, 'customIcons'> & { customIcons: Record<Alphabet, string> } {
  return {
    orientation: getValidValue(config?.orientation, ['horizontal', 'vertical'], DEFAULT_CONFIG.orientation),
    offset: getValidNumber(config?.offset, DEFAULT_CONFIG.offset),
    customIcons: getValidIcons(config?.customIcons),
  };
}

function getValidValue<T>(value: T | undefined, validValues: T[], defaultValue: T): T {
  return validValues.includes(value as T) ? (value as T) : defaultValue;
}

function getValidNumber(value: number | undefined, defaultValue: number): number {
  return typeof value === 'number' && value >= 0 ? value : defaultValue;
}

function getValidIcons(value?: Partial<Record<Alphabet, string>>): Record<Alphabet, string> {
  if (!value || Object.keys(value).length === 0) return defaultIcons;

  return (Object.keys(defaultIcons) as Alphabet[]).reduce(
    (acc, key) => {
      const icon = value[key];
      acc[key] = icon && isValidIcon(icon) ? icon : defaultIcons[key];
      return acc;
    },
    {} as Record<Alphabet, string>,
  );
}

function isValidIcon(svg: string): boolean {
  const { width, height } = extractElementSizes(svg);
  return width > 0 && height > 0;
}
