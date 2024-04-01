import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleCompleted } from "../redux/slices/todoSlice";

const TodoSingle = ({ todo }) => {
  const dispatch = useDispatch();

  // Function to delete todo
  const handleDeleteTodo = () => {
    dispatch(deleteTodo(todo.id));
  };

  // Function to handle toggling the completion status of a todo
  const handleCompleted = () => {
    dispatch(toggleCompleted(todo.id));
  };

  return (
    <div className="task my-1 flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4 shadow-sm hover:bg-gray-50">
      <div className="flex items-center">
        {/* Checkbox for toggling completion status */}
        <input
          type="checkbox"
          defaultChecked={todo.completed}
          onChange={handleCompleted}
          className="mr-2"
        />

        {/* Todo task text */}
        <p
          className={`${todo.completed && "text-green-500 line-through"} font-medium text-gray-800`}
        >
          {todo.task}
        </p>
      </div>

      {/* Delete button */}
      <MdDelete
        className="cursor-pointer text-red-500"
        onClick={handleDeleteTodo}
        size={22}
      />
    </div>
  );
};

export default TodoSingle;
