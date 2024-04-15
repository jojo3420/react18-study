import React, { createContext, useReducer } from 'react';
import { initState, todoReducer } from "../reducer/TodoReducer.js";

// Context 생성
const TodoContext = createContext({ state: {}, dispatch: () => {} });

// Provider 컴포넌트 정의
const TodoProvider = ({ children }) => {
	const [state, dispatch] = useReducer(todoReducer, initState);

	return (
	// Context 값에 state 상태, dispatch 함수 전달
	<TodoContext.Provider value={{ state, dispatch }}>
		{children}
	</TodoContext.Provider>
	);
}

export { TodoContext, TodoProvider };


