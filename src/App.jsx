import React from 'react';
import './App.css';
import TodoList from './components/todolist/TodoList.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Users from './components/users/Users.jsx';
import Posts from './components/posts/Posts.jsx';
import User from './components/users/User.jsx';

const Home = () => <h1>Home</h1>;

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/todolist' element={<TodoList />} />
        <Route path='/users' element={<Users />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
