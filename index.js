// Đầu tiên mình sẽ để một dòng console.log để kiểm tra xem app có chạy bình thường không
// console.log("!!!!");

//Để sử dụng app express
const express = require("express");
const app = express();

app.use(express.json());

// //GET API

app.get("/", (req, res) => {
  return res.send("Hello World!!");
});

// // //Khởi tạo mảng rỗng
// const todos = [];

// // //Chọn phương thức GET, return về mảng todos hiện tại dưới dạng json

// // // Lần đầu chạy sẽ ra mảng rỗng, vì khởi tạo bên trên là mảng rỗng
// app.get("/todos", (req, res) => {
//   return res.json(todos);
// });

// // //POST API

// //Chọn phương thức POST
// app.post("/todos", (req, res) => {
//   //Lấy title từ body của request
//   //Ở đây mình cũng có thể lấy
//   //const title = req.body.title;
//   const { title } = req.body;

//   //Tạo object todo với title đã lấy từ body của request
//   //Để mặc định completed là false
//   const todo = {
//     id: todos.length + 1,
//     title,
//     // completed: false,
//   };

//   //Push phần tử todo này vào mảng todos
//   todos.push(todo);

//   //Return về phần tử todo dưới dạng json
//   return res.json(todo);
// });

// // app.put("/todos/:id", (req, res) => {
// //   console.log(req.params);
// //   const todo = todos.find((i) => i.id == req.params.id);
// //   if (todo) {
// //     todo.title = req.body.title;
// //     res.json(todo);
// //   } else {
// //     res.status(404).send("Todo not found");
// //   }
// // });

// // app.delete("/todos/:id", (req, res) => {
// //   const todo = todos.find((i) => i.id == req.params.id);
// //   const todoIndex = todos.indexOf(todo);
// //   if (todoIndex !== -1) {
// //     todos.splice(todoIndex, 1);
// //     res.status(204).send();
// //   } else {
// //     res.status(404).send("Item not found");
// //   }
// // });
//Run app ở port 8080
app.listen(8080, () => {
  //Kiểm tra app có đang chạy không
  console.log("The app is running");
});
