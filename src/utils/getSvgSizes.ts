import {
  DEFAULT_F_SVG_H_OFFSET,
  DEFAULT_F_SVG_H_WIDTH,
  DEFAULT_F_SVG_V_HEIGHT,
  DEFAULT_F_SVG_V_OFFSET,
  DEFAULT_F_SVG_V_WIDTH,
} from '../constants/sizes';
import type { MarineCodeConfig } from '../types/config';

export function getSvgSizes(
  elementsCount: number,
  orientation: MarineCodeConfig['orientation'],
): {
  width: number;
  height: number;
} {
  const width = getSvgWidth(elementsCount, orientation);
  const height = getSvgHeight(elementsCount, orientation);

  return { width, height };
}

function getSvgWidth(elementsCount: number, orientation: MarineCodeConfig['orientation']): number {
  return orientation === 'horizontal'
    ? calculateSvgDimension(elementsCount, DEFAULT_F_SVG_H_WIDTH, DEFAULT_F_SVG_H_OFFSET)
    : DEFAULT_F_SVG_V_WIDTH;
}

function getSvgHeight(elementsCount: number, orientation: MarineCodeConfig['orientation']): number {
  return orientation === 'vertical'
    ? calculateSvgDimension(elementsCount, DEFAULT_F_SVG_V_HEIGHT, DEFAULT_F_SVG_V_OFFSET)
    : DEFAULT_F_SVG_H_WIDTH;
}

function calculateSvgDimension(elementsCount: number, dimension: number, offset: number): number {
  const totalElementsDimension = elementsCount * dimension;
  const totalOffsetWidth = (elementsCount - 1) * offset;

  return totalElementsDimension + totalOffsetWidth;
}
