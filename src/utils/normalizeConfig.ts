import { DEFAULT_CONFIG } from '../constants/config';
import type { MarineCodeConfig } from '../types/config';

export function normalizeConfig(config?: MarineCodeConfig): Required<MarineCodeConfig> {
  return {
    orientation: getValidValue(config?.orientation, ['horizontal', 'vertical'], DEFAULT_CONFIG.orientation),
    offset: getValidNumber(config?.offset, DEFAULT_CONFIG.offset),
  };
}

function getValidValue<T>(value: T | undefined, validValues: T[], defaultValue: T): T {
  return validValues.includes(value as T) ? (value as T) : defaultValue;
}

function getValidNumber(value: number | undefined, defaultValue: number): number {
  return typeof value === 'number' && value >= 0 ? value : defaultValue;
}
