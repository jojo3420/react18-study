import React from 'react';
import './App.css';
import TodoList from './components/todolist/TodoList.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Users from './components/users/Users.jsx';

const Home = () => <h1>Home</h1>;


function App() {
 return(
   <BrowserRouter>
   <Routes>
    <Route path='/todolist' element={<TodoList />} />
    <Route path='/users' element={<Users />} />
    <Route path='*' element={<Home />} />
  </Routes>
   </BrowserRouter>
 );

}

export default App;
