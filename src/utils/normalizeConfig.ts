import { DEFAULT_CONFIG } from '../constants/config';
import { defaultIcons } from '../constants/defaultIcons';
import type { Alphabet, MarineCodeConfig } from '../types/config';
import { extractElementSizes } from './extractElementSizes';

export function normalizeConfig(
  config?: MarineCodeConfig,
): Omit<Required<MarineCodeConfig>, 'customIcons'> & { customIcons: Record<Alphabet, string> } {
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

  return Object.keys(defaultIcons).reduce(
    (acc, key) => {
      if (key.length === 1 && key.toUpperCase() === key) {
        const svg = value?.[key as Alphabet];
        const defaultSvg = defaultIcons[key as Alphabet];

        if (!svg) {
          acc[key as Alphabet] = defaultSvg;
          return acc;
        }

        const { width, height } = extractElementSizes(svg);
        if (!!width && !!height) {
          acc[key as Alphabet] = svg;
        } else {
          acc[key as Alphabet] = defaultSvg;
        }
      }
      return acc;
    },
    {} as Record<Alphabet, string>,
  );
}
