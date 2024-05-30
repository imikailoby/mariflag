import { DEFAULT_F_SVG_H_WIDTH, DEFAULT_F_SVG_H_OFFSET } from '../constants/sizes';

const INITIAL_OFFSET = 0;

export function prepareSvgChildren(elements: string[]): string[] {
  return elements.map(applyTransformToSvgElement);
}

function applyTransformToSvgElement(element: string, index: number): string {
  const horizontalOffset = calculateHorizontalOffset(index);
  return wrapSvgWithTransform(element, horizontalOffset);
}

function calculateHorizontalOffset(index: number): number {
  return index === 0 ? INITIAL_OFFSET : index * (DEFAULT_F_SVG_H_WIDTH + DEFAULT_F_SVG_H_OFFSET);
}

function wrapSvgWithTransform(content: string, hOffset = INITIAL_OFFSET): string {
  return `<svg><g transform="translate(${hOffset}, 0)">${content}</g></svg>`;
}
