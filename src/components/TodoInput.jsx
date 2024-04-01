import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { addTodos } from "../redux/slices/todoSlice";

const TodoInput = ({ setShowForm }) => {
  const dispatch = useDispatch();

  // state to store input value
  const [inputVal, setInputVal] = useState("");

  // function to handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = new Date().getTime(); // Generate unique ID based on current timestamp
    dispatch(addTodos({ id, task: inputVal, completed: false }));
    setInputVal("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex w-96 flex-col space-y-2 rounded-md bg-gray-100 p-8"
    >
      {/* Close button to hide the form */}
      <IoMdClose
        className="absolute right-3 top-3 cursor-pointer rounded-full bg-black text-white"
        onClick={() => setShowForm(false)}
      />

      {/* Label for the input field */}
      <label>Enter a new task</label>

      <input
        type="text"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
        placeholder="Enter a new task"
        className="mr-2 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none"
      />

      {/* Button to submit the new task */}
      <button
        type="submit"
        className="w-full rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none"
      >
        Add New Task
      </button>
    </form>
  );
};

export default TodoInput;
