import asyncHandler from "express-async-handler";
import { createTodayDate } from "../utils/datesHandler.js";
import messages from "../repositories/messages.js";

const newMessageController = asyncHandler(async (req, res) => {
    const { messageText, authorName } = req.body;

    if (!messageText || !authorName) {
        res.status(406).send("All fields must be filled.");
        return;
    }

    messages.push({
        text: req.body.messageText,
        user: req.body.authorName,
        added: createTodayDate(),
        id: messages.length + 1,
    });

    res.status(200).redirect("/");
});

export default newMessageController;
