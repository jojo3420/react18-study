import React from 'react';
import './App.css';
import { RecoilRoot } from 'recoil';
import TodoList from './components/todolist/TodoList.jsx';
import Counter from './components/ counter/Counter.jsx';
import Users from './components/user/Users.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import UserInfo from './components/user/UserInfo.jsx';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path='/users' element={<Users />} />
          <Route path='/userinfo' element={<UserInfo />} />
          <Route path='/todolist' element={<TodoList />} />
          <Route path='/counter' element={<Counter />} />
          <Route path='*' element={<Home />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
