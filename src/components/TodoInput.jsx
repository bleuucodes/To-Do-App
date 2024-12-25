import React, { useState, useContext } from "react";
import TodoContext from "../context/TodoContext";

function TodoInput() {
  const [input, setInput] = useState("");

  const { addTodo } = useContext(TodoContext);

  const handleAddTodo = (e) => {
    e.preventDefault();

    addTodo(input);
    setInput("");
  };

  return (
    <form className="flex">
      <input
        className="w-full outline-none rounded-l-lg px-3 bg-white/20 py-1.5"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Write here..."
      />
      <button
        className="rounded-r-lg px-3 py-1 bg-[#C62300] text-white"
        onClick={handleAddTodo}
      >
        Add 
      </button>
    </form>
  );
}

export default TodoInput;
