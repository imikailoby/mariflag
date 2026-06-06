import type { Sizes, Dimension } from '../types/common';

export function extractElementSizes(element: string): Sizes {
  return {
    width: extractElementDimension(element, 'width'),
    height: extractElementDimension(element, 'height'),
  };
}

function extractElementDimension(element: string, dimension: Dimension): number {
  // Anchor on a tag/whitespace boundary so attributes like `stroke-width` are
  // not mistaken for `width`.
  const regex = new RegExp(`(?:^|\\s)${dimension}="(\\d+)"`);
  const match = element.match(regex);
  return match ? parseInt(match[1], 10) : 0;
}
