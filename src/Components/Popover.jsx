import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTodo } from "../features/todos/todoSlice";

const Popover = ({ todo }) => {
  const dispatch = useDispatch();
  const [isPopoverOpen, setPopoverOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const openPopover = () => {
    setPopoverOpen(!isPopoverOpen);
  };

  const closePopover = () => {
    setPopoverOpen(false);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    console.log(inputValue);

    if (!inputValue) {
      alert("Please enter a valid input");
    } else {
      // const updatedTodo = console.log(todo);
      dispatch(updateTodo({ id: todo.id, text: inputValue }));
      setInputValue("");
    }

    // Close the popover
    closePopover();
  };

  return (
    <div className="relative inline-block text-left">
      {/* <button
        type="button"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
        onClick={openPopover}
      >
        Open Popover
      </button> */}
      <i
        className="text-blue-400 cursor-pointer  fa-duotone fa-pen-to-square"
        onClick={openPopover}
      ></i>

      {isPopoverOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white text-black ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            <input
              type="text"
              className="px-4 py-2 border rounded w-full"
              placeholder="Enter something"
              value={inputValue}
              onChange={handleInputChange}
            />
          </div>
          <div className="py-1">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
              onClick={handleButtonClick}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popover;
