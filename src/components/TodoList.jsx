import React, { useContext } from 'react';
import TodoInput from "./TodoInput.jsx";
import TodoItem from "./TodoItem.jsx";
import AllClearBtn from "./AllClearBtn.jsx";
import { TodoContext} from "../context/TodoContext.jsx";

function TodoList() {
	const { state } = useContext(TodoContext);
	return (
		<>
			<h1>TodoList</h1>
			<AllClearBtn />
			<TodoInput />
			{state && state.todoList.map((todoItem) => (
				<TodoItem key={todoItem.id} todoItem={todoItem} />
			))}
		</>
	);
}

export default TodoList;