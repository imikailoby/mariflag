import type { Alphabet } from '../types/config';

export function getSvgArrayFromName(name: string, icons: Record<Alphabet, string>): string[] {
  return (name.toUpperCase().split('') as Alphabet[])
    .filter((letter) => letter in icons)
    .map((letter) => icons[letter]);
}
