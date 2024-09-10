import type { SvgImageConfig } from '../types/config';

export const DEFAULT_SVG_CONFIG: Required<SvgImageConfig> = {
  orientation: 'horizontal',
  offset: 16, // 1/3 of the flag size
  customIcons: {},
};
