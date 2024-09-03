import asyncHandler from "express-async-handler";
import messages from "../repositories/messages.js";

const messageController = asyncHandler(async (req, res) => {
    const { id } = req.params;
    
    if (!id) {
        res.status(404).send("Id not found.");
    }

    const parsedId = parseInt(id);

    const foundMessage = messages.find((message) => {
        return message.id == parsedId;
    });
    
    res.render("messageById", {
        title: "Mini Message Board",
        foundMessage: foundMessage,
    });
});

export default messageController;
