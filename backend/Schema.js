const mongoose = require("mongoose");
const { MONGO_URL } = require("./config");
function connect() {
  mongoose
    .connect(MONGO_URL)
    .then(function (res) {
      console.log("Mongoose Connected successfully...");
    })
    .catch(function (err) {
      console.log("error connecting mongoose...", err);
    });
}
const Schema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const Todo = mongoose.model("Todo", Schema);

module.exports = {
  Todo,
  connect,
};
