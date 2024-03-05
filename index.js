// Đầu tiên mình sẽ để một dòng console.log để kiểm tra xem app có chạy bình thường không
// console.log("!!!!")

//Để sử dụng app express
const express = require("express");
const app = express();

app.use(express.json());

//GET API

//Khởi tạo mảng rỗng
const todos = [];

//Chọn phương thức GET, return về mảng todos hiện tại dưới dạng json 

// Lần đầu chạy sẽ ra mảng rỗng, vì khởi tạo bên trên là mảng rỗng
app.get("/todos", (req, res) => {
    return res.json(todos);
})

//POST API

//Chọn phương thức POST
app.post("/todos", (req, res) => {
    //Lấy title từ body của request
    //Ở đây mình cũng có thể lấy
    //const title = req.body.title;
    const { title } = req.body;

    //Tạo object todo với title đã lấy từ body của request
    //Để mặc định completed là false
    const todo = {
        title,
        completed: false
    }

    //Push phần tử todo này vào mảng todos
    todos.push(todo);

    //Return về phần tử todo dưới dạng json
    return res.json(todo)
})

//Run app ở port 8080
app.listen(8080, () => {

    //Kiểm tra app có đang chạy không
    console.log("The app is running")
})

