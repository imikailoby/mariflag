import { DEFAULT_CONFIG } from '../constants/config';
import { buildSvg } from './buildSvg';
import { getSvgArrayFromName } from './getSvgArrayFromName';
import { prepareString } from './prepareString';

export function generateMarineCode(text: string, config = DEFAULT_CONFIG): string {
  const preparedString = prepareString(text);
  if (!preparedString) return '';

  const svgFlagsArray = getSvgArrayFromName(preparedString);
  return buildSvg(svgFlagsArray, config);
}
