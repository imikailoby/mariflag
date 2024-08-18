import type { Sizes, Dimension } from '../types/common';

export function extractElementSizes(element: string): Sizes {
  return {
    width: extractElementDimension(element, 'width'),
    height: extractElementDimension(element, 'height'),
  };
}

function extractElementDimension(element: string, dimension: Dimension): number {
  const regex = new RegExp(`${dimension}="(\\d+)"`);
  const match = element.match(regex);
  return match ? parseInt(match[1], 10) : 0;
}
