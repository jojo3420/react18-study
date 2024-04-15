import React from 'react';
import './App.css';
import { RecoilRoot } from 'recoil';
import TodoList from './components/todolist/TodoList.jsx';
import Counter from './components/ counter/Counter.jsx';

function App() {
  return (
    <RecoilRoot>
      <TodoList />
      <Counter />
    </RecoilRoot>
  );
}

export default App;
