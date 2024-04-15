import { v4 as uuidv4 } from 'uuid';


const todoList = [
	{ id: uuidv4(), text: 'Learn React', isDone: false },
	{ id: uuidv4(), text: 'Learn Context API', isDone: true },
	{ id: uuidv4(), text: 'Learn Recoil', isDone: false },
];


const initState = {
	text: '',
	todoList: todoList,
}

const todoReducer = (state, action) => {
	switch (action.type) {
		case 'SET_TEXT':
			return {...state, text: action.payload };
		case 'ADD_TODO':
		  return {...state, todoList: [...state.todoList, { id: uuidv4(), text: action.payload, isDone: false }]};
		case 'DELETE_TODO':
			const newTodoList = state.todoList.filter((todoItem) => todoItem.id !== action.payload)
			return { ...state, todoList: newTodoList};
		case 'TOGGLE_TODO':
			const toggledTodoList = state.todoList.map(item => item.id === action.payload ? { ...item, isDone: !item.isDone } : item);
			return {...state, todoList: toggledTodoList }
		case 'TODOLIST_CLEAR':
			return {...state, todoList: [] };
		default:
			return state;
	}
}

export {
	initState,
	todoReducer,
}