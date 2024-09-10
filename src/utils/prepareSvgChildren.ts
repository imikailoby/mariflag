import type { Orientation } from '../types/config';
import type { Dimension } from '../types/common';
import { extractElementSizes } from './extractElementSizes';

const INITIAL_OFFSET = 0;

export function prepareSvgChildren(elements: string[], orientation: Orientation, offset: number): string[] {
  return elements.map((e, i, arr) => {
    const prevElements = arr.slice(0, i);
    return applyTransformToSvgElement(e, i, orientation, offset, prevElements);
  });
}

function applyTransformToSvgElement(
  element: string,
  index: number,
  orientation: Orientation,
  offset: number,
  prevElements: string[],
): string {
  const hOffset = getOffset(index, orientation, offset, prevElements, 'horizontal');
  const wOffset = getOffset(index, orientation, offset, prevElements, 'vertical');

  return applyCoordinatesForSvg(element, hOffset, wOffset);
}

function getOffset(
  index: number,
  orientation: Orientation,
  offset: number,
  prevElements: string[],
  direction: Orientation,
): number {
  const dimension = direction === 'horizontal' ? 'width' : 'height';
  return orientation === direction ? calculateOffset(index, offset, prevElements, dimension) : INITIAL_OFFSET;
}

function calculateOffset(index: number, offset: number, prevElements: string[], dimension: Dimension): number {
  if (index === 0) return INITIAL_OFFSET;

  return prevElements.reduce((acc, el) => {
    const { width, height } = extractElementSizes(el);
    const elDimension = dimension === 'width' ? width : height;
    return acc + elDimension + offset;
  }, 0);
}

function applyCoordinatesForSvg(element: string, hOffset: number, wOffset: number): string {
  element = updateCoordinate(element, 'y', wOffset);
  element = updateCoordinate(element, 'x', hOffset);
  return element;
}

function updateCoordinate(element: string, coordinate: 'x' | 'y', offset: number): string {
  const regex = new RegExp(`(<svg[^>]*\\s)${coordinate}="[^"]*"`);
  const hasCoordinate = regex.test(element);

  if (hasCoordinate) {
    return element.replace(regex, `$1${coordinate}="${offset}"`);
  } else {
    return element.replace(/^<svg/, `<svg ${coordinate}="${offset}"`);
  }
}
