import { subDays, format } from "date-fns";

// Get today's date
const today = new Date();

// Get dates from previous days
const threeDaysAgo = subDays(today, 3);
const sevenDaysAgo = subDays(today, 7);
const fifteenDaysAgo = subDays(today, 15);
const fortyThreeDaysAgo = subDays(today, 43);

// Format the dates to desired format
const formattedDateToday = format(today, "EEE, dd MMM yyyy HH:mm:ss 'GMT'");
const formattedDateThree = format(
    threeDaysAgo,
    "EEE, dd MMM yyyy HH:mm:ss 'GMT'"
);
const formattedDateSeven = format(
    sevenDaysAgo,
    "EEE, dd MMM yyyy HH:mm:ss 'GMT'"
);
const formattedDateFifteen = format(
    fifteenDaysAgo,
    "EEE, dd MMM yyyy HH:mm:ss 'GMT'"
);
const formattedDateFortyThree = format(
    fortyThreeDaysAgo,
    "EEE, dd MMM yyyy HH:mm:ss 'GMT'"
);

function createTodayDate() {
    const today = new Date();
    const formattedDateToday = format(today, "EEE, dd MMM yyyy HH:mm:ss 'GMT'");

    return formattedDateToday;
}

export {
    formattedDateToday,
    formattedDateThree,
    formattedDateSeven,
    formattedDateFifteen,
    formattedDateFortyThree,
    createTodayDate
};
