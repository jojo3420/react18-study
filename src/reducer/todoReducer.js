import { v4 as uuidv4 } from 'uuid';

const initTodoList = [
	{ id: uuidv4(), text: 'Learn React', done: false },
	{ id: uuidv4(), text: 'Clean Code', done: true },
	{ id: uuidv4(), text: 'Ship App', done: false }
];



const todoReducer = (todoList, action) => {
	switch (action.type) {
		case 'ADD':
			return [...todoList, {id: uuidv4(), text: action.payload, done: false}];
		case 'REMOVE':
			return todoList.filter(todo => todo.id !== action.id);
		case 'TOGGLE':
			return todoList.map(todo => todo.id === action.id ? {...todo, done: !todo.done} : todo);
		case 'ALL_CLEAR':
			return [];
		default:
			return todoList;
	}
}



export {
	todoReducer,
	initTodoList
}