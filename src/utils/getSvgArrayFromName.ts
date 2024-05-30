import { svgFlagsByLetter } from '../constants/svgFlagsByLetter';

export function getSvgArrayFromName(name: string): string[] {
  if (!name) return [];

  return name.toUpperCase().split('').filter(isSvgLetter).map(getSvgForLetter);
}

function isSvgLetter(letter: string): boolean {
  return letter in svgFlagsByLetter;
}

function getSvgForLetter(letter: string): string {
  return svgFlagsByLetter[letter];
}
