import { toUpperCase } from "../app/Utils";
import { getStringInfo } from "../app/Utils";

describe("Utils", () => {
  test("converts a string to uppercase", () => {
    expect(toUpperCase("hello")).toBe("HELLO");
  });

  test.only("returns an info for valid string", () => {
    expect(getStringInfo("hello")).toEqual({
      lowerCase: "hello",
      upperCase: "HELLO",
      characters: ["h", "e", "l", "l", "o"],
      length: 5,
      extraInfo: {},
    });
  });
});
