import type { Alphabet } from '../types/config';

export function getSvgArrayFromName(name: string, icons: Record<Alphabet, string>): string[] {
  if (!name) return [];

  return (name.toUpperCase().split('') as Alphabet[])
    .filter((l) => isSvgLetter(l, icons))
    .map((l) => getSvgForLetter(l, icons));
}

function isSvgLetter(letter: string, icons: Record<Alphabet, string>): boolean {
  return letter in icons;
}

function getSvgForLetter(letter: Alphabet, icons: Record<Alphabet, string>): string {
  return icons[letter];
}
