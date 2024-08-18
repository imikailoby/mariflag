import type { Sizes } from '../types/common';
import type { Orientation } from '../types/config';
import { extractElementSizes } from './extractElementSizes';

export function getSvgSizes(elements: string[], orientation: Orientation, offset: number): Sizes {
  const { totalWidth, totalHeight, maxElementWidth, maxElementHeight } = calculateDimensions(elements);

  const width = getSvgDimension(elements.length, orientation, offset, totalWidth, maxElementWidth, 'horizontal');
  const height = getSvgDimension(elements.length, orientation, offset, totalHeight, maxElementHeight, 'vertical');

  return { width, height };
}

function calculateDimensions(elements: string[]): {
  totalWidth: number;
  totalHeight: number;
  maxElementWidth: number;
  maxElementHeight: number;
} {
  return elements.reduce(
    (acc, el) => {
      const { width, height } = extractElementSizes(el);

      acc.totalWidth += width;
      acc.totalHeight += height;
      acc.maxElementWidth = Math.max(acc.maxElementWidth, width);
      acc.maxElementHeight = Math.max(acc.maxElementHeight, height);

      return acc;
    },
    {
      totalWidth: 0,
      totalHeight: 0,
      maxElementWidth: 0,
      maxElementHeight: 0,
    },
  );
}

function getSvgDimension(
  elementsCount: number,
  orientation: Orientation,
  offset: number,
  totalDimension: number,
  maxElementDimension: number,
  direction: Orientation,
): number {
  return orientation === direction ? calculateSvgDimension(elementsCount, totalDimension, offset) : maxElementDimension;
}

function calculateSvgDimension(elementsCount: number, totalDimension: number, offset: number): number {
  return totalDimension + (elementsCount - 1) * offset;
}
