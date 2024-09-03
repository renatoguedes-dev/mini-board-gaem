import { Router } from "express";
import messages from "../repositories/messages.js";

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
    res.render("index", {
        showIndex: true,
        showForm: false,
        title: "Mini Message Board",
        messages: messages,
    });
});

export default indexRouter;
