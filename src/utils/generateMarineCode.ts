import type { MarineCodeConfig } from '../types/config';
import { buildSvg } from './buildSvg';
import { getSvgArrayFromName } from './getSvgArrayFromName';
import { normalizeConfig } from './normalizeConfig';
import { prepareString } from './prepareString';

export function generateMarineCode(text: string, config?: MarineCodeConfig): string {
  const preparedString = prepareString(text);
  if (!preparedString) return '';

  const svgFlagsArray = getSvgArrayFromName(preparedString);
  const normalizedConfig = normalizeConfig(config);
  return buildSvg(svgFlagsArray, normalizedConfig);
}
