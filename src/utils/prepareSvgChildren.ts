import { DEFAULT_F_SVG_H_WIDTH, DEFAULT_F_SVG_V_HEIGHT } from '../constants/sizes';
import type { Orientation } from '../types/config';

const INITIAL_OFFSET = 0;

export function prepareSvgChildren(elements: string[], orientation: Orientation, offset: number): string[] {
  return elements.map((e, i) => applyTransformToSvgElement(e, i, orientation, offset));
}

function applyTransformToSvgElement(element: string, index: number, orientation: Orientation, offset: number): string {
  const hOffset = getHorizontalOffset(index, orientation, offset);
  const wOffset = getVerticalOffset(index, orientation, offset);

  return wrapSvgWithTransform(element, hOffset, wOffset);
}

function getHorizontalOffset(index: number, orientation: Orientation, offset: number): number {
  return orientation === 'horizontal' ? calculateOffset(index, DEFAULT_F_SVG_H_WIDTH, offset) : INITIAL_OFFSET;
}

function getVerticalOffset(index: number, orientation: Orientation, offset: number): number {
  return orientation === 'vertical' ? calculateOffset(index, DEFAULT_F_SVG_V_HEIGHT, offset) : INITIAL_OFFSET;
}

function calculateOffset(index: number, dimension: number, offset: number): number {
  return index === 0 ? INITIAL_OFFSET : index * (dimension + offset);
}

function wrapSvgWithTransform(content: string, hOffset: number, wOffset: number): string {
  return `<svg><g transform="translate(${hOffset}, ${wOffset})">${content}</g></svg>`;
}
