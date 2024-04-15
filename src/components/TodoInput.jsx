import React, { useContext } from 'react';
import { TodoContext } from "../context/TodoContext.jsx";


function TodoInput() {
	const { state, dispatch } = useContext(TodoContext);
	const handleChange = ({ target }) => dispatch({ type: 'SET_TEXT', payload: target.value });

	const handleAdd = () => {
		if (!state.text.trim()) return;

		dispatch({ type: 'ADD_TODO', payload: state.text });
		dispatch({ type: 'SET_TEXT', payload: ''});
	}

	return (
		<>
			<button onClick={() => dispatch({ type: 'SET_TEXT', payload: '' })}>clear</button>
			<input type="text" value={state.text} onChange={handleChange} />
			<button onClick={handleAdd}>add</button>
		</>
	);
}

export default TodoInput;