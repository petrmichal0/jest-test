import { toUpperCase } from "../app/Utils";

describe("Utils", () => {
  test("converts a string to uppercase", () => {
    expect(toUpperCase("hello")).toBe("HELLO");
  });
});
