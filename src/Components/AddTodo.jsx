import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todos/todoSlice";
const AddTodo = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const addTodoHandler = (e) => {
    e.preventDefault();

    if (!input) {
      alert("Please enter a valid input");
    } else {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  return (
    <form
      onSubmit={addTodoHandler}
      className="flex justify-center items-center gap-4 bg-[#4A4A4A] p-8 mb-8 rounded"
    >
      <input
        className="font-mono text-xl rounded px-4 py-2"
        type="text"
        placeholder="ADD TODO"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button className="font-mono text-xl px-4 py-2 bg-purple-400  text-white rounded">
        ADD
      </button>
    </form>
  );
};

export default AddTodo;
