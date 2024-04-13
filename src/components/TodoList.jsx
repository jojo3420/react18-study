import React, {useState} from 'react';
import TodoItem from "./TodoItem.jsx";
import {v4 as uuidv4} from 'uuid';
import TodoInput from "./TodoInput.jsx";
import AllClearBtn from "./AllClearBtn.jsx";

function TodoList() {
	const [todoList, setTodoList] = useState([
		{id: uuidv4(), text: 'todo1', done: false},
		{id: uuidv4(), text: 'todo2', done: true},
		{id: uuidv4(), text: 'todo3', done: false}
	]);
	const [text, setText] = useState('');

	const handleAdd = (e) => {
		e.preventDefault();
		if (!text) {
			alert("할 일을 입력해주세요.");
			return;
		}
		setTodoList(prevTodoList => [...prevTodoList, {id: uuidv4(), text, done: false}]);
		setText('');
	}

	const handleText = (value) => {
		setText(value);
	}

	const handleToggle = (id) => {
		if (!id) {
			return;
		}
		const index = todoList.findIndex(todo => todo.id === id);
		if (index > -1) {
			const newTodoList = [...todoList];
			newTodoList[index].done = !newTodoList[index].done;
			setTodoList((prev) => newTodoList);
		}
	}
	const handleRemove = (id) => {
		if (id) {
			const newTodoList = todoList.filter(todo => todo.id !== id);
			setTodoList(prevTodoList => newTodoList);
		}
	}


	return (
		<>
			<div>
				<h1>할일목록</h1>
				<AllClearBtn setTodoList={setTodoList}/>
			</div>

			<TodoInput
				text={text}
				handleText={handleText}
				handleAdd={handleAdd}
			/>
			<ul>
				{todoList.map(todo => (
					<li key={todo.id}>
						<TodoItem item={todo} handleToggle={handleToggle} handleRemove={handleRemove}/>
					</li>
				))}
			</ul>
		</>
	);
}

export default TodoList;