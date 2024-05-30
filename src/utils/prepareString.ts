const NON_ALPHABETIC_REGEX = /[^a-zA-Z]/g;

export function prepareString(input: string): string {
  return removeNonAlphabeticCharacters(input).toUpperCase();
}

function removeNonAlphabeticCharacters(input: string): string {
  return input.replace(NON_ALPHABETIC_REGEX, '');
}
