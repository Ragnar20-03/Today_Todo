const express = require("express");
<<<<<<< HEAD
const { connect, Todo } = require("./Schema");
const app = express();
const Port = 3000;

app.use(express.json());

app.post("/addTodo", async (req, res) => {
     const todo = req.body.todo;
     Todo.create(
          todo
     ).then((res1) => {
          return res.status(200).json({
               msg: " todo added successfully..."
          })
     })
          .catch((err1) => {
               console.log("err", err1)
               return res.status(404).json({
                    msg: "Error occurred"
               })
          })
})

app.get("/getTodos", async (req, res) => {
     Todo.find({}).then((res1) => {
          return res.status(200).json({
               msg: "Found todo..."
          })
     })
})

app.listen(Port, function () {
     console.log("Server Started...");
     connect();
})
=======

const app = express();
>>>>>>> 36ba35d ( Temp)
