import { createSlice } from "@reduxjs/toolkit";

// Utility function to load todos from localStorage
const loadTodosFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

// Utility function to save todos to localStorage
const saveTodosToLocalStorage = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const initialState = {
  todos: loadTodosFromLocalStorage(),
};

const todoSlice = createSlice({
  name: "todoslice",
  initialState,
  reducers: {
    // Reducer to add a new todo
    addTodos: (state, action) => {
      state.todos.push(action.payload);
      saveTodosToLocalStorage(state.todos);
    },
    // Reducer to delete a todo
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      saveTodosToLocalStorage(state.todos);
    },
    // Reducer to toggle the completed status of a todo
    toggleCompleted: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo,
      );
      saveTodosToLocalStorage(state.todos);
    },
  },
});

export default todoSlice.reducer;
export const { addTodos, deleteTodo, toggleCompleted } = todoSlice.actions;
