import React, { useContext, useState } from "react";
import TodoContext from "../context/TodoContext";

function TodoList() {
  const { todos, deleteTodo, updateTodo, toggleComplete } =
    useContext(TodoContext);
  const [editId, setEditId] = useState(null);
  const [newText, setNewText] = useState("");

  const handleUpdate = (id, currentText) => {
    setEditId(id);
    setNewText(currentText);
  };

  const saveUpdate = (id) => {
    if (newText.trim() === "") {
      alert("Todo text cannot be empty!");
      return;
    }

    updateTodo(id, newText);
    setEditId(null);
    setNewText("");
  };

  return (
    <div className="flex flex-wrap gap-y-3">
      {todos?.map((todo) => (
        <div key={todo.id} className="w-full">
          {editId === todo.id ? (
            <div
              className={`flex border border-black/10  outline-none rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 text-black ${
                todo.isCompleted ? "bg-[#91dff2]" : "bg-[#ccbed7]"
              }`}
            >
              <input
                name="checkbox"
                type="checkbox"
                className="cursor-pointer"
                onChange={() => toggleComplete(todo.id)}
              />

              <input
                type="text"
                className="px-2 border border-black/10 outline-none w-full bg-transparent rounded-lg"
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
              />

              <button
                className="w-14 h-8 rounded-md  text-white text-sm bg-[#039c03] hover:bg-[#066006] shrink-0 disabled:opacity-50"
                onClick={() => saveUpdate(todo.id)}
              >
                Save
              </button>

              <button
                className="w-14 h-8 rounded-md text-sm text-white bg-[#d92a02] hover:bg-[#841f08] shrink-0"
                onClick={() => setEditId(null)}
              >
                Cancel
              </button>
            </div>
          ) : (
            <div
              className={`flex  border border-black/10  outline-none  rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50  text-black ${
                todo.isCompleted ? "bg-[#91dff2]" : "bg-[#ccbed7]"
              }`}
            >
              <input
                name="checkbox"
                type="checkbox"
                className="cursor-pointer"
                onChange={() => toggleComplete(todo.id)}
              />

              <input
                name="todo item"
                type="text"
                className=" outline-none px-2  w-full bg-transparent rounded-lg"
                value={todo.todoText}
              />
              
              <button
                className="w-20 h-8 rounded-md text-white text-sm  bg-[#3572EF] hover:bg-[#2652aa]  disabled:opacity-50"
                onClick={() => {
                  if (todo.isCompleted) {
                    return;
                  } else {
                    handleUpdate(todo.id, todo.todoText);
                  }
                }}
                disabled={todo.isCompleted}
              >
                Update
              </button>

              <button
                className="w-14 h-8 rounded-md text-white text-sm border border-black/10 justify-center
                  items-center bg-[#d92a02] hover:bg-[#7f220e] shrink-0"
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default TodoList;
