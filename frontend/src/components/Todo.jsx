import axios from "axios";
import React, { useEffect, useState } from "react";

function Todo() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/getTodos").then((res) => {
      console.log("res is : ", res);
      setTodos(res.data.todos);
    });
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [newTodo, setNewTodo] = useState({
    title: "",
    description: "",
    date: "",
  });

  const todoHandler = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              status: todo.status === "completed" ? "incompleted" : "completed",
            }
          : todo
      )
    );
    console.log("Toggled status for todo with id:", id);
  };

  const deleteTodo = (id) => {
    // setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    // console.log("Deleted todo with id:", id);
  };

  const addTodo = (e) => {
    e.preventDefault();
    const newId =
      todos.length > 0 ? Math.max(...todos.map((todo) => todo.id)) + 1 : 1;
    const todo = {
      id: newId,
      ...newTodo,
      status: "incompleted",
    };

    axios
      .post("http://localhost:3000/addTodo", {
        todo: todo,
      })
      .then((res) => {
        console.log("res from Add Todo is  : ", res);
      });

    setTodos([...todos, todo]);
    setNewTodo({ title: "", description: "", date: "" });
    setIsOpen(false);
    console.log("Added new todo:", todoToAdd);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {todos.map((todo) => (
          <div key={todo.id} className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2">{todo.title}</h3>
            <p className="text-gray-600 mb-2">{todo.description}</p>
            <p className="text-sm text-gray-500 mb-2">Date: {todo.date}</p>
            <p className="text-sm font-medium mb-2">
              Status:{" "}
              <span
                className={
                  todo.status === "completed"
                    ? "text-green-500"
                    : "text-red-500"
                }
              >
                {todo.status}
              </span>
            </p>
            <div className="flex justify-between">
              <button
                onClick={() => todoHandler(todo.id)}
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
              >
                Toggle Status
              </button>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => setIsOpen(true)}
        className="mt-6 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Add Todo
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Add New Todo</h2>
            <form onSubmit={addTodo} className="space-y-4">
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Title
                </label>
                <input
                  id="title"
                  type="text"
                  value={newTodo.title}
                  onChange={(e) =>
                    setNewTodo({ ...newTodo, title: e.target.value })
                  }
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  value={newTodo.description}
                  onChange={(e) =>
                    setNewTodo({ ...newTodo, description: e.target.value })
                  }
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-gray-700"
                >
                  Date
                </label>
                <input
                  id="date"
                  type="date"
                  value={newTodo.date}
                  onChange={(e) =>
                    setNewTodo({ ...newTodo, date: e.target.value })
                  }
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Add Todo
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Todo;
