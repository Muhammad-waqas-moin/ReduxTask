import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: "1", text: "hello world" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      // console.log(state);
      const todo = { id: nanoid(), text: action.payload };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      const newTodo = state.todos.filter((todo) => {
        return todo.id !== action.payload;
      });
      state.todos.splice(newTodo, 1);
    },
    updateTodo: (state, action) => {
      // console.log(state);
      const { id } = action.payload;
      const updatedObj = action.payload;
      // console.log(action.payload);
      const updatedTodos = state.todos.map((todo) => {
        return todo.id === id ? updatedObj : todo;
      });
      state.todos = updatedTodos;
      // const updatedTodos = state.todos.map((todo) =>
      //   todo.id === action.payload
      //     ? { id: todo.id, text: action.payload }
      //     : todo
      // );
      // const updateObj = action.payload;
      // state.todos = state.todos.map((todo) => {
      //   todo.id !== updateObj.id ? { ...updateObj, text: "hello" } : todo;
      // });
      // state.todos.push(toddos);
      // console.log(id, text);

      // console.log(action.payload);
      // const todos = state.todos.find((todo) =>
      //   todo.id === action.payload ? { id: todo, text: action.payload } : todo
      // );

      // console.log(todo);

      // state.todos = state.todos.find(
      //   (todo) => {
      //     todo.id === action.payload
      //       ? { id: todo.id, text: action.payload }
      //       : todo;
      //   }

      //   const findTodo = state.todos.find((todo) => todo.id == action.payload.id);
      //   const updateTodo = Object.assign({
      //     ...findTodo,
      //     text: action.payload.text,
      //   });
      //   state.todos = { ...findTodo, ...updateTodo };
      // );
    },
    search: (state, action) => {
      state.todos = state.todos.map((todo) => {
        todo.text === action.payload ? todo : state.todos;
      });
    },
  },
});

export const { addTodo, removeTodo, updateTodo, search } = todoSlice.actions;
export default todoSlice.reducer;
