const mongoose = require("mongoose");
function connect() {
     mongoose.connect("mongodb+srv://ragnar20-03:Rshn_M0ngodb@cluster0.xkq2ebu.mongodb.net/Todo_Today").then(function (res) {
          console.log("Mongoose Connected successfully...")
     })
          .catch(function (err) {
               console.log("error connecting mongoose...", err)
          })

}
const Schema = new mongoose.Schema({
     title: String,
     description: String,
     completed: Boolean
})

const Todo = mongoose.model('Todo', Schema)

module.exports = {
     Todo, connect
}

