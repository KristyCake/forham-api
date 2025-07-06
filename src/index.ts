import express from "express";
import hello from "./controllers/hello.controller";
import todolistRouter from "./router/todolist.router";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors())

app.get("/hello", hello);
app.use("/api/todolist", todolistRouter);

export default app;