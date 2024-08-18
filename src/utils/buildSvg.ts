import type { MarineCodeConfig } from '../types/config';
import { getSvgSizes } from './getSvgSizes';
import { prepareSvgChildren } from './prepareSvgChildren';

export function buildSvg(svgFlagsArray: string[], config: MarineCodeConfig): string {
  const { width, height } = getSvgSizes(svgFlagsArray.length, config.orientation);
  const svgContent = generateSvgContent(svgFlagsArray, config.orientation);
  return createSvgElement(width, height, svgContent);
}

function generateSvgContent(svgFlagsArray: string[], orientation: MarineCodeConfig['orientation']): string {
  return prepareSvgChildren(svgFlagsArray, orientation).join('');
}

function createSvgElement(width: number, height: number, content: string): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}px" height="${height}px">${content}</svg>`;
}
