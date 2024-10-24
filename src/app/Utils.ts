export function toUpperCase(arg: string): string {
  if (!arg) {
    throw new Error("Input string cannot be empty");
  }

  return arg.toUpperCase();
}

export type stringInfo = {
  lowerCase: string;
  upperCase: string;
  characters: string[];
  length: number;
  extraInfo: object | undefined;
};

export function getStringInfo(input: string): stringInfo {
  return {
    lowerCase: input.toLowerCase(),
    upperCase: input.toUpperCase(),
    characters: Array.from(input),
    length: input.length,
    extraInfo: {},
  };
}
