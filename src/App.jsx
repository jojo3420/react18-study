// eslint-disable-next-line no-unused-vars
import React from 'react'
import './App.css'
import TodoList from "./components/todolist/TodoList.jsx";
import {TodoProvider} from "./context/TodoContext.jsx";
import {CounterProvider} from "./context/CounterContext.jsx";
import Counter from "./components/counter/Counter.jsx";

function App() {
  return (
    <>
      <TodoProvider>
        <TodoList />
      </TodoProvider>
      <CounterProvider>
        <Counter />
      </CounterProvider>
    </>
  )
}

export default App
