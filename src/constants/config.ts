import type { MarineCodeConfig } from '../types/config';

export const DEFAULT_CONFIG: Required<MarineCodeConfig> = {
  orientation: 'horizontal',
  offset: 16, // 1/3 of the flag size
  customIcons: {},
};
