import express from "express";
import dotenv from "dotenv";
import path from "path";
import url from "url";
import indexRouter from "./routes/IndexRouter.js";
import newMessageRoute from "./routes/NewMessageRoute.js";
import messagesRouter from "./routes/MessagesRouter.js";

dotenv.config();
const PORT = process.env.PORT || 4000;

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);

app.use("/new", newMessageRoute);

app.use("/messages", messagesRouter)

app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.statusCode || 500).send(err);
});

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
