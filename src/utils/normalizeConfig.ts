import { DEFAULT_CONFIG } from '../constants/config';
import type { MarineCodeConfig, Orientation } from '../types/config';

export function normalizeConfig(config?: MarineCodeConfig): Required<MarineCodeConfig> {
  return {
    orientation: getOrientation(config?.orientation),
  };
}

function getOrientation(orientation: MarineCodeConfig['orientation']): Orientation {
  return orientation === 'horizontal' || orientation === 'vertical' ? orientation : DEFAULT_CONFIG.orientation;
}
