const getRemainingDateFromPreviousMonth = (date) => {
  // Get the month and year from the date
  const month = date.getMonth();
  const year = date.getFullYear();

  // Create a new Date object with the first day of the month
  const firstDay = new Date(year, month, 1);

  //  Get the day : ex: 0 - Sunday, 1 - Monday, 2 - Tuesday, 3 - Wednesday, 4 - Thursday, 5 - Friday, 6 - Saturday
  const dayOfWeek = firstDay.getDay();

  return dayOfWeek;
};

const getRemainingDateFromNextMonth = (date) => {
  // Get the month and year from the date
  const month = date.getMonth();
  const year = date.getFullYear();

  // Create a new Date object with the last day of the month
  const lastDay = new Date(year, month + 1, 0);

  // Get the day : ex: 0 - Sunday, 1 - Monday, 2 - Tuesday, 3 - Wednesday, 4 - Thursday, 5 - Friday, 6 - Saturday
  const dayOfWeek = lastDay.getDay();

  return 6 - dayOfWeek;
};

const getDatesInMonth = (date) => {
  // Get the month and year from the date
  const month = date.getMonth();
  const year = date.getFullYear();

  // Create a new Date object with the first day of the month
  const startDate = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  // increment the date from startDate to lastDay
  let day = 0;

  for (let i = startDate; i <= lastDay; i.setDate(i.getDate() + 1)) {
    day++;
  }

  return day;
};

const getArrayOfDate = (date) => {
  // Get the remaining date from the previous month
  const remainingDateFromPreviousMonth =
    getRemainingDateFromPreviousMonth(date);

  // Get the remaining date from the next month
  const remainingDateFromNextMonth = getRemainingDateFromNextMonth(date);

  // Get the current date in the current month
  const currentDateMonth = getDatesInMonth(date);

  // Get the total date in the current month
  const totalDate =
    remainingDateFromPreviousMonth +
    currentDateMonth +
    remainingDateFromNextMonth;

  // Get the total row in the current month
  const row = totalDate / 7;

  // Initialize the array of date, remaining date from previous month Counter, remaining date from next month Counter, and current date in the current month Counter
  let arrayOfDate = [];
  let countRemainingDateFromPreviousMonth = 0;
  let countRemainingDateFromNextMonth = 0;
  let countCurrentDateMonth = 1;

  // Loop through the total row and each row have 7 column
  for (let i = 0; i < row; i++) {
    let array = [];
    for (let j = 0; j < 7; j++) {
      // for each column check each counter, from previous, current, and next month
      if (
        countRemainingDateFromPreviousMonth < remainingDateFromPreviousMonth
      ) {
        array.push("");
        countRemainingDateFromPreviousMonth++;
      } else if (countCurrentDateMonth <= currentDateMonth) {
        array.push(countCurrentDateMonth);
        countCurrentDateMonth++;
      } else if (countRemainingDateFromNextMonth < remainingDateFromNextMonth) {
        array.push("");
        countRemainingDateFromNextMonth++;
      }
    }
    arrayOfDate.push(array);
  }
  return arrayOfDate;
};

const getMonthName = (date) => {
  const month = date.getMonth();
  const monthName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return monthName[month];
};

const getMonthNumber = (month) => {
  const monthName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return monthName.indexOf(month);
};

export {
  getRemainingDateFromPreviousMonth,
  getRemainingDateFromNextMonth,
  getDatesInMonth,
  getArrayOfDate,
  getMonthName,
  getMonthNumber,
};
