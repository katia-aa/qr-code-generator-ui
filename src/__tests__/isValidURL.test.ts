import isValidURL from "../utils/isValidURL";

describe("isValidURL", () => {
  it("should return true for a valid URL with http", () => {
    expect(isValidURL("http://example.com")).toBe(true);
  });

  it("should return true for a valid URL with https", () => {
    expect(isValidURL("https://example.com")).toBe(true);
  });

  it("should return false for an invalid URL", () => {
    expect(isValidURL("htp://invalid-url")).toBe(false);
  });

  it("should return false for a random string", () => {
    expect(isValidURL("not-a-url")).toBe(false);
  });

  it("should return true for a URL with a path", () => {
    expect(isValidURL("https://example.com/path")).toBe(true);
  });
});
