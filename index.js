// console.log("!!!!")
const express = require("express");
const app = express();

app.use(express.json());

//GET API
const todos = [];
app.get("/todos", (req, res) => {
    return res.json(todos);
})

//POST API
app.post("/todos", (req, res) => {
    const { title } = req.body;
    const todo = {
        title,
        completed: false
    }
    todos.push(todo);
    return res.json(todo)
})
app.listen(8080, () => {
    console.log("The app is running")
})

