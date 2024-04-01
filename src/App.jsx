import React from "react";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div className="App min-h-screen bg-gray-100 px-3">
      <h1 className="py-6 text-center text-3xl font-semibold ">My Tasks ✅</h1>
      <TodoList />
    </div>
  );
};

export default App;
