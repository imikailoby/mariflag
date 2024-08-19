import type { MarineCodeConfig } from '../types/config';
import { buildSvg } from './buildSvg';
import { getSvgArrayFromName } from './getSvgArrayFromName';
import { normalizeConfig } from './normalizeConfig';
import { prepareString } from './prepareString';

export function generateSvg(text: string, config?: MarineCodeConfig): string {
  const preparedString = prepareString(text);
  if (!preparedString) return '';

  const normalizedConfig = normalizeConfig(config);
  const svgFlagsArray = getSvgArrayFromName(preparedString, normalizedConfig.customIcons);
  return buildSvg(svgFlagsArray, normalizedConfig);
}
