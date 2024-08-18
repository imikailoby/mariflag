import type { MarineCodeConfig, Orientation } from '../types/config';
import { getSvgSizes } from './getSvgSizes';
import { prepareSvgChildren } from './prepareSvgChildren';

export function buildSvg(svgFlagsArray: string[], config: Required<MarineCodeConfig>): string {
  const { width, height } = getSvgSizes(svgFlagsArray.length, config.orientation, config.offset);
  const svgContent = generateSvgContent(svgFlagsArray, config.orientation, config.offset);
  return createSvgElement(width, height, svgContent);
}

function generateSvgContent(svgFlagsArray: string[], orientation: Orientation, offset: number): string {
  return prepareSvgChildren(svgFlagsArray, orientation, offset).join('');
}

function createSvgElement(width: number, height: number, content: string): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}px" height="${height}px">${content}</svg>`;
}
