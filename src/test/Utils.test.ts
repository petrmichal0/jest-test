import { toUpperCase } from "../app/Utils";
import { getStringInfo } from "../app/Utils";

describe("Utils", () => {
  test("converts a string to uppercase", () => {
    expect(toUpperCase("hello")).toBe("HELLO");
  });

  test("returns an info for valid string", () => {
    expect(getStringInfo("hello")).toEqual({
      lowerCase: "hello",
      upperCase: "HELLO",
      characters: ["h", "e", "l", "l", "o"],
      length: 5,
      extraInfo: {},
    });
  });
});

describe("getStringInfo", () => {
  test("lowerCase", () => {
    expect(getStringInfo("hello").lowerCase).toBe("hello");
  });
  test("upperCase", () => {
    expect(getStringInfo("hello").upperCase).toBe("HELLO");
  });
  test("characters", () => {
    expect(getStringInfo("hello").characters).toEqual([
      "h",
      "e",
      "l",
      "l",
      "o",
    ]);
  });
  test("length", () => {
    expect(getStringInfo("hello").length).toBe(5);
  });
  test("extraInfo", () => {
    expect(getStringInfo("hello").extraInfo).toEqual({});
  });
});

describe("ToUpperCase examples", () => {
  test.each([
    {
      input: "hello",
      expected: "HELLO",
    },
    {
      input: "heLL-o",
      expected: "HELL-O",
    },
    {
      input: "heLLo",
      expected: "HELLO",
    },
  ])("$input to UpperCase should be $expected", ({ input, expected }) => {
    expect(toUpperCase(input)).toBe(expected);
  });
});

describe("Should throw an error for empty string", () => {
  test.only("empty string", () => {
    expect(() => toUpperCase("")).toThrow("Input string cannot be empty");
  });
});
