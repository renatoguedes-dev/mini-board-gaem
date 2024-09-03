import {
    formattedDateToday,
    formattedDateThree,
    formattedDateSeven,
    formattedDateFifteen,
    formattedDateFortyThree,
} from "../utils/datesHandler.js";

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: formattedDateFortyThree,
        id: 1,
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: formattedDateFifteen,
        id: 2,
    },
    {
        text: "What a nice day!",
        user: "Rachel",
        added: formattedDateSeven,
        id: 3,
    },
    {
        text: "What is up, Fred?",
        user: "Johnny",
        added: formattedDateThree,
        id: 4,
    },
    {
        text: "I love playing volleyball!",
        user: "Sarah",
        added: formattedDateToday,
        id: 5,
    },
];

export default messages;
