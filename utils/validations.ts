import { MinMaxValuesParams } from "@/interfaces";
import { getDateParts } from "./format";

export const isValueBetweenMinAndMax = ({
  value,
  min,
  max
}: MinMaxValuesParams) => value.length >= min && value.length <= max;

export const isValidDate = (date: string) => {
  const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/;
  return dateRegex.test(date);
};

export const isDateGreaterOrEqualToCurrentDate = (date: string) => {
  const { day, month, year } = getDateParts(date);
  const inputDate = new Date(year, month, day);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return inputDate >= today;
};
