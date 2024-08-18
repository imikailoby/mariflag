import { DEFAULT_F_SVG_H_WIDTH, DEFAULT_F_SVG_V_HEIGHT, DEFAULT_F_SVG_V_WIDTH } from '../constants/sizes';
import type { Orientation } from '../types/config';

export function getSvgSizes(
  elementsCount: number,
  orientation: Orientation,
  offset: number,
): {
  width: number;
  height: number;
} {
  const width = getSvgWidth(elementsCount, orientation, offset);
  const height = getSvgHeight(elementsCount, orientation, offset);

  return { width, height };
}

function getSvgWidth(elementsCount: number, orientation: Orientation, offset: number): number {
  return orientation === 'horizontal'
    ? calculateSvgDimension(elementsCount, DEFAULT_F_SVG_H_WIDTH, offset)
    : DEFAULT_F_SVG_V_WIDTH;
}

function getSvgHeight(elementsCount: number, orientation: Orientation, offset: number): number {
  return orientation === 'vertical'
    ? calculateSvgDimension(elementsCount, DEFAULT_F_SVG_V_HEIGHT, offset)
    : DEFAULT_F_SVG_H_WIDTH;
}

function calculateSvgDimension(elementsCount: number, dimension: number, offset: number): number {
  const totalElementsDimension = elementsCount * dimension;
  const totalOffsetWidth = (elementsCount - 1) * offset;

  return totalElementsDimension + totalOffsetWidth;
}
