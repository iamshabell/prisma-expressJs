import express from "express";
import { router as userRouter } from "./users/user.route";
import { router as bookRouter } from "./books/book.route";
import { router as categoryRouter } from "./categories/categories.route";

const app = express();

app.use(express.json());
app.use("/users", userRouter);
app.use("/books", bookRouter);
app.use("/categories", categoryRouter);

export { app };
