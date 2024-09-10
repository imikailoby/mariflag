import type { SvgImageConfig, SvgOrientation } from '../types/config';
import { calculateSvgDimensions } from './calculateSvgDimensions';
import { generateSvgIconFragments } from './generateSvgIconFragments';

export function constructSvgElement(svgFlagsArray: string[], config: Required<SvgImageConfig>): string {
  const { width, height } = calculateSvgDimensions(svgFlagsArray, config.orientation, config.offset);
  const svgContent = generateSvgContent(svgFlagsArray, config.orientation, config.offset);
  return wrapSvgElement(width, height, svgContent);
}

function generateSvgContent(svgFlagsArray: string[], orientation: SvgOrientation, offset: number): string {
  return generateSvgIconFragments(svgFlagsArray, orientation, offset).join('');
}

function wrapSvgElement(width: number, height: number, content: string): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}px" height="${height}px">${content}</svg>`;
}
