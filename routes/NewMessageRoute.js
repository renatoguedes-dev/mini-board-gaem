import { Router } from "express";
import newMessageController from "../controllers/NewMessageController.js";

const newMessageRoute = Router();

newMessageRoute.get("/", (req, res) => {
    res.render("index", {
        showForm: true,
        showIndex: false,
        title: "Mini Message Board",
    });
});

newMessageRoute.post("/", newMessageController);

export default newMessageRoute;
