import type { SvgImageConfig } from '../types/config';
import { constructSvgElement } from './constructSvgElement';
import { getSvgArrayFromName } from './getSvgArrayFromName';
import { normalizeConfig } from './normalizeConfig';
import { prepareString } from './prepareString';

export function generateSvg(text: string, config?: SvgImageConfig): string {
  const preparedString = prepareString(text);
  if (!preparedString) return '';

  const normalizedConfig = normalizeConfig(config);
  const svgFlagsArray = getSvgArrayFromName(preparedString, normalizedConfig.customIcons);
  return constructSvgElement(svgFlagsArray, normalizedConfig);
}
