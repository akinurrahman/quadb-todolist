import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoSingle from "./TodoSingle";
import { useSelector } from "react-redux";

const TodoList = () => {
  // State to control the visibility of the TodoForm
  const [showForm, setShowForm] = useState(false);
  const { todos } = useSelector((state) => state.todo);

  return (
    <div className="mx-auto max-w-lg ">
      {/* Button to add a new task */}
      <button
        onClick={() => setShowForm(true)}
        className="mb-2  block w-full rounded-md bg-blue-600 py-3 font-bold text-white hover:bg-blue-500"
      >
        Add New Task
      </button>

      {/* Render todo items */}
      {todos.map((todo) => (
        <TodoSingle key={todo.id} todo={todo} />
      ))}

      {/* Conditional rendering of TodoForm */}
      {showForm && (
        <section className="fixed inset-0  mx-3 flex items-center justify-center bg-gray-700 bg-opacity-50">
          <TodoInput setShowForm={setShowForm} />
        </section>
      )}
    </div>
  );
};

export default TodoList;
