import {
  DEFAULT_F_SVG_H_WIDTH,
  DEFAULT_F_SVG_H_OFFSET,
  DEFAULT_F_SVG_V_HEIGHT,
  DEFAULT_F_SVG_V_OFFSET,
} from '../constants/sizes';
import type { Orientation } from '../types/config';

const INITIAL_OFFSET = 0;

export function prepareSvgChildren(elements: string[], orientation: Orientation): string[] {
  return elements.map((e, i) => applyTransformToSvgElement(e, i, orientation));
}

function applyTransformToSvgElement(element: string, index: number, orientation: Orientation): string {
  const hOffset = getHorizontalOffset(index, orientation);
  const wOffset = getVerticalOffset(index, orientation);

  return wrapSvgWithTransform(element, hOffset, wOffset);
}

function getHorizontalOffset(index: number, orientation: Orientation): number {
  return orientation === 'horizontal'
    ? calculateOffset(index, DEFAULT_F_SVG_H_WIDTH, DEFAULT_F_SVG_H_OFFSET)
    : INITIAL_OFFSET;
}

function getVerticalOffset(index: number, orientation: Orientation): number {
  return orientation === 'vertical'
    ? calculateOffset(index, DEFAULT_F_SVG_V_HEIGHT, DEFAULT_F_SVG_V_OFFSET)
    : INITIAL_OFFSET;
}

function calculateOffset(index: number, dimension: number, offset: number): number {
  return index === 0 ? INITIAL_OFFSET : index * (dimension + offset);
}

function wrapSvgWithTransform(content: string, hOffset: number, wOffset: number): string {
  return `<svg><g transform="translate(${hOffset}, ${wOffset})">${content}</g></svg>`;
}
