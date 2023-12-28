import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  removeTodo,
  updateTodo,
} from "../features/todos/todoSlice.js";
import Mymodal from "./Popover.jsx";
import Popover from "./Popover.jsx";

const Todos = () => {
  const todos = useSelector((state) => state?.todos);
  // console.log(todos);
  const dispatch = useDispatch();
  console.log(todos);
  return (
    <div>
      <ul className="flex flex-col gap-y-4">
        {todos.map((todo, index) => (
          <li
            className="flex justify-between items-center bg-[#4A4A4A] text-white font-mono text-3xl p-2 w-full rounded"
            key={index}
          >
            {todo?.text}
            <div className="flex gap-4 transition">
              <i
                className="text-red-600 cursor-pointer fa-duotone fa-trash"
                onClick={() => dispatch(removeTodo(todo.id))}
              ></i>
              {/* <Mymodal />
              <Popover */}
              <Popover todo={todo} />
              {/* <i
                className="text-blue-400 cursor-pointer  fa-duotone fa-pen-to-square"
                onClick={() => dispatch(updateTodo(todo.id))}
              ></i> */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
