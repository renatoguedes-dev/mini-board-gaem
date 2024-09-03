import { Router } from "express";
import messageController from "../controllers/MessagesController.js";

const messagesRouter = Router();

messagesRouter.get("/:id", messageController);

export default messagesRouter;
