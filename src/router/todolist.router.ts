import express from "express";
import getTodolist from "../controllers/todolist/getTodolist";
import addTodolist from "../controllers/todolist/addTodolist";
import editTodolist from "../controllers/todolist/editTodolist";
import delTodolist from "../controllers/todolist/delTodolist";

const todolistRouter = express.Router();

todolistRouter.get("/", getTodolist)
todolistRouter.post("/", addTodolist)
todolistRouter.put("/:to_id", editTodolist)
todolistRouter.delete("/:to_id", delTodolist)

export default todolistRouter;