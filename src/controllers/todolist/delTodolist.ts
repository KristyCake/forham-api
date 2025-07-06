// src/controller/todolist/delTodolist.ts

import { Request, Response } from "express";
import { todolist } from "../../cache";

export default function delTodolist(req: Request, res: Response) {
  const to_id = req.params.to_id;
  if (!to_id || to_id == "") {
    res.status(400).json({ msg: "invalid to_id" });
    return;
  }
  const index = todolist.findIndex(to => to.id === Number(to_id));
  if (index === -1) {
    res.status(400).json({ msg: "Not found this Todalist" })
    return;
  }

  todolist.splice(index, 1);
  res.status(200).json({ msg: "Deleted Todolist ID" + index + "success" });
}