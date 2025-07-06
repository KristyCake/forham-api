// src/controller/todolist/addTodolist.ts

import { Request, Response } from "express";

import { todolist } from "../../cache";

import { validateInput, ValidationSchema } from "../../plugin/validator";

export default function addTodolist(req: Request, res: Response) {
  // ValisationSchema ใส่เพื่อให้ Code เห็นว่าจะมีการกำหนด type ของ script
  const schema: ValidationSchema = {
    title: {
      type: 'string',
      minLength: 1,
      required: true,
      // displayName: 'ชื่อเรื่อง',
    },
    descript: {
      type: 'string',
      minLength: 1,
      required: true,
      // displayName: 'รายละเอียด',
    },
    completed: {
      type: 'boolean',
      required: true,
      // displayName: 'สถานะ',
    }
  }

  const validate = validateInput(req.body, schema);
  if (!validate.success) {
    res.status(400).json({ msg: validate.errorMsg });
    return;
  }

  let id = todolist.length;

  const { title, descript, completed } = validate.data;

  const newTodolist = {
    id,
    title,
    descript,
    completed
  };
  todolist.push(newTodolist)

  res.status(200).json({ msg: "Created Data success" });
}