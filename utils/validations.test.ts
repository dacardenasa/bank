import {
  isDateGreaterOrEqualToCurrentDate,
  isValidDate,
  isValueBetweenMinAndMax
} from "./validations";

describe("isValueBetweenMinAndMax", () => {
  it("should return true for value within min and max bounds", () => {
    const value = "hello";
    const min = 3;
    const max = 10;
    expect(isValueBetweenMinAndMax({ value, min, max })).toBe(true);
  });

  it("should return true for value equal to min bound", () => {
    const value = "ab";
    const min = 2;
    const max = 10;
    expect(isValueBetweenMinAndMax({ value, min, max })).toBe(true);
  });

  it("should return true for value equal to max bound", () => {
    const value = "abcdefghij";
    const min = 3;
    const max = 10;
    expect(isValueBetweenMinAndMax({ value, min, max })).toBe(true);
  });

  it("should return false for value below min bound", () => {
    const value = "a";
    const min = 2;
    const max = 10;
    expect(isValueBetweenMinAndMax({ value, min, max })).toBe(false);
  });

  it("should return false for value above max bound", () => {
    const value = "abcdefghijk";
    const min = 3;
    const max = 10;
    expect(isValueBetweenMinAndMax({ value, min, max })).toBe(false);
  });
});

describe("isValidDate", () => {
  it("should return true for a valid date string", () => {
    const date = "01/01/2022";
    expect(isValidDate(date)).toBe(true);
  });

  it("should return true for a valid date string with maximum values", () => {
    const date = "31/12/2099";
    expect(isValidDate(date)).toBe(true);
  });

  it("should return false for an invalid date string format", () => {
    const date = "invalid date string";
    expect(isValidDate(date)).toBe(false);
  });
});

describe("isDateGreaterOrEqualToCurrentDate", () => {
  it("should return false for a date less than current date", () => {
    const date = "2022-01-01";
    expect(isDateGreaterOrEqualToCurrentDate(date)).toBe(false);
  });
});
