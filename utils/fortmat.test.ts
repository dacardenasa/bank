import { getDateParts, addYearsToDate, createDateFromString } from "./format";

describe("getDateParts", () => {
  it("should correctly parse a valid date", () => {
    const date = "15/06/2023";
    const result = getDateParts(date);
    expect(result).toEqual({ day: 15, month: 5, year: 2023 });
  });

  it("should handle single-digit day and month correctly", () => {
    const date = "5/8/2021";
    const result = getDateParts(date);
    expect(result).toEqual({ day: 5, month: 7, year: 2021 });
  });

  it("should return NaN for invalid day", () => {
    const date = "xx/06/2023";
    const result = getDateParts(date);
    expect(result).toEqual({ day: NaN, month: 5, year: 2023 });
  });

  it("should return NaN for invalid month", () => {
    const date = "15/yy/2023";
    const result = getDateParts(date);
    expect(result).toEqual({ day: 15, month: NaN - 1, year: 2023 });
  });

  it("should return NaN for invalid year", () => {
    const date = "15/06/zzzz";
    const result = getDateParts(date);
    expect(result).toEqual({ day: 15, month: 5, year: NaN });
  });

  it("should handle incomplete date strings", () => {
    const date = "15/06";
    const result = getDateParts(date);
    expect(result).toEqual({ day: 15, month: 5, year: NaN });
  });

  it("should handle empty date string", () => {
    const date = "";
    const result = getDateParts(date);
    expect(result).toEqual({ day: NaN, month: NaN - 1, year: NaN });
  });
});

describe("addYearsToDate", () => {
  it("should add 1 year to a valid date", () => {
    const date = "01/01/2022";
    const yearsNumber = 1;
    const expectedResult = "01/01/2023";
    expect(addYearsToDate(date, yearsNumber)).toBe(expectedResult);
  });

  it("should add 0 years to a valid date", () => {
    const date = "01/01/2022";
    const yearsNumber = 0;
    const expectedResult = "01/01/2022";
    expect(addYearsToDate(date, yearsNumber)).toBe(expectedResult);
  });

  it("should add -1 year to a valid date", () => {
    const date = "01/01/2022";
    const yearsNumber = -1;
    const expectedResult = "01/01/2021";
    expect(addYearsToDate(date, yearsNumber)).toBe(expectedResult);
  });
});

describe("createDateFromString", () => {
  it("should create a date from a valid string", () => {
    const dateString = "01/01/2022";
    const expectedResult = new Date(2022, 0, 1);
    expect(createDateFromString(dateString)).toEqual(expectedResult);
  });

  it("should create a date from a valid string with single-digit day and month", () => {
    const dateString = "1/1/2022";
    const expectedResult = new Date(2022, 0, 1);
    expect(createDateFromString(dateString)).toEqual(expectedResult);
  });
});
