const NON_ALPHABETIC_REGEX = /[^a-zA-Z]/g;

export function prepareString(input: string): string {
  return toUpperCase(removeNonAlphabeticCharacters(input));
}

function removeNonAlphabeticCharacters(input: string): string {
  return input.replace(NON_ALPHABETIC_REGEX, '');
}

function toUpperCase(input: string): string {
  return input.toUpperCase();
}
