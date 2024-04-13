import {v4 as uuidv4} from 'uuid';

const initTodoList = [
	{id: uuidv4(), text: 'Learn React', done: false},
	{id: uuidv4(), text: 'Clean Code', done: true},
	{id: uuidv4(), text: 'Ship App', done: false}
];

const initState = {
	text: '',
	todoList: initTodoList,
}


const todoReducer = (state, action) => {
	switch (action.type) {
		case 'TEXT_CLEAR':
			return {...state, text: ''};
		case 'SET_TEXT':
			return {...state, text: action.text};
		case 'ADD_TODO':
			return {
				text: '',
				todoList: [
					...state.todoList,
					{ id: uuidv4(), text: state.text, done: false }
				]
			};
		case 'REMOVE':
			return {
				...state,
				todoList: state.todoList.filter(todo => todo.id !== action.id),
			};
		case 'TOGGLE':
			return {
				...state,
				todoList: state.todoList.map(todo => todo.id === action.id ? {...todo, done: !todo.done} : todo)
			};
		case 'ALL_CLEAR':
			return {...state, todoList: []};
		default:
			return state;
	}
}


export {
	todoReducer,
	initState,
}