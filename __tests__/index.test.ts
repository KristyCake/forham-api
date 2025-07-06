import app from "../src/index"
import request from "supertest";

// describe('Unit Testing Hello World', () => {
//   it('GET /hello -> return Hello World', async () => {
//     const res = await request(app)
//       .get("/hello");
//     expect(res.status).toBe(200);
//     expect(res.body.msg).toBe("Hello World");
//   });
// });

describe('Unit Testing Todolist', () => {
  it('GET /api/todolist -> return todolist: [] length 0', async () => {
    const res = await request(app)
      .get("/api/todolist");
    expect(res.status).toBe(200);
    expect(res.body.todolist.length).toBe(0);
  });

  it('POST /api/todolist -> return todolist: [] length 0', async () => {
    const res = await request(app)
      .post("/api/todolist")
      .send({ title: 'Test' });
    expect(res.status).toBe(400);
    expect(res.body.msg).toBe("descript จำเป็นต้องกรอก\ncompleted จำเป็นต้องกรอก");
  });

  it('PUT /api/todolist -> return todolist: length 0', async () => {
    const res = await request(app)
      .put("/api/todolist/0")
      .send({ title: 'Test', descript: 'Test', completed: true });
    expect(res.status).toBe(400);
    expect(res.body.msg).toBe('ไม่พบ Todolist ID: 0 นี้');
  });

  it('DELETE /api/todolist -> return todolist: length 0', async () => {
    const res = await request(app)
      .delete("/api/todolist/0")
      .send({ title: 'Test', descript: 'Test', completed: true });
    expect(res.status).toBe(400);
    expect(res.body.msg).toBe('Not found this Todalist');
  });

  //   it('PUT /api/todolist -> return แก้ไข Test เป็น Hello World สำเร็จ', async () => {
  //     const res = await request(app)
  //       .put("/api/todolist")
  //       .send({ id: 0, title: 'Hello World', descript: 'Hello World', completed: false });
  //     expect(res.status).toBe(200);
  //     expect(res.body.msg).toBe("แก้ไข Todolist ID 0 เป็น Hello World สำเร็จ");
  //   });

  //   it('PUT /api/todolist -> return ไม่พบ Todolist ID 1', async () => {
  //     const res = await request(app)
  //       .put("/api/todolist")
  //       .send({ id: 1, title: 'Hello World', descript: 'Hello World', completed: false });
  //     expect(res.status).toBe(400);
  //     expect(res.body.msg).toBe("ไม่พบ Todolist ID 1");
  //   });

  //   it('GET /api/todolist -> return todolist: [] Array 0 Titile = Hello World', async () => {
  //     const res = await request(app)
  //       .get("/api/todolist");
  //     expect(res.status).toBe(200);
  //     expect(res.body.todolist[0].title).toBe("Hello World");
  //   });

  //   it('PUT /api/todolist -> return ลบ Todolist ID 0 Hello World แล้ว', async () => {
  //     const res = await request(app)
  //       .delete("/api/todolist/0");
  //     expect(res.status).toBe(200);
  //     expect(res.body.msg).toBe("ลบ Todolist ID 0 Hello World แล้ว");
  //   });

  //   it('GET /api/todolist -> return todolist: [] length 0', async () => {
  //     const res = await request(app)
  //       .get("/api/todolist");
  //     expect(res.status).toBe(200);
  //     expect(res.body.todolist.length).toBe(0);
  //   });
});