import React, { useContext } from 'react';
import { TodoContext } from "../context/TodoContext.jsx";

function AllClearBtn() {
	const { dispatch } = useContext(TodoContext);

	return (
		<div style={{ marginBottom: '1rem'}}>
			<button onClick={() => dispatch({ type: 'TODOLIST_CLEAR' })}>목록 전체 삭제</button>
		</div>
	);
}

export default AllClearBtn;