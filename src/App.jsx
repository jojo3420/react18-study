// eslint-disable-next-line no-unused-vars
import React from 'react'
import './App.css'
import TodoList from "./components/TodoList.jsx";
import {TodoProvider} from "./context/TodoContext.jsx";

function App() {
  return (
    <TodoProvider>
      <TodoList />
    </TodoProvider>
  )
}

export default App
