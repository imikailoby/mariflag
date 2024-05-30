import { DEFAULT_F_SVG_H_OFFSET, DEFAULT_F_SVG_H_WIDTH, DEFAULT_F_SVG_H_HEIGHT } from '../constants/sizes';
import { prepareSvgChildren } from './prepareSvgChildren';

export function buildSvg(svgFlagsArray: string[]): string {
  const svgWidth = calculateSvgWidth(svgFlagsArray.length);
  const svgContent = generateSvgContent(svgFlagsArray);
  return createSvgElement(svgWidth, svgContent);
}

function generateSvgContent(svgFlagsArray: string[]): string {
  return prepareSvgChildren(svgFlagsArray).join('');
}

function calculateSvgWidth(elementsCount: number): number {
  const totalElementsWidth = elementsCount * DEFAULT_F_SVG_H_WIDTH;
  const totalOffsetWidth = (elementsCount - 1) * DEFAULT_F_SVG_H_OFFSET;

  return totalElementsWidth + totalOffsetWidth;
}

function createSvgElement(width: number, content: string): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}px" height="${DEFAULT_F_SVG_H_HEIGHT}px">${content}</svg>`;
}
