export const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat("en-GB").format(date);
};

export const getDateParts = (date: string) => {
  const parts = date.split("/");
  const day = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10) - 1;
  const year = parseInt(parts[2], 10);
  return { day, month, year };
};

export const addYearsToDate = (date: string, yearsNumber: number) => {
  const { day, month, year } = getDateParts(date);
  const inputDate = new Date(year, month, day);

  inputDate.setFullYear(inputDate.getFullYear() + yearsNumber);

  const newDay = String(inputDate.getDate()).padStart(2, "0");
  const newMonth = String(inputDate.getMonth() + 1).padStart(2, "0");
  const newYear = inputDate.getFullYear();

  return `${newDay}/${newMonth}/${newYear}`;
};

export const createDateFromString = (dateString: string) => {
  const { day, month, year } = getDateParts(dateString);
  const date = new Date(year, month, day);
  return date;
};
