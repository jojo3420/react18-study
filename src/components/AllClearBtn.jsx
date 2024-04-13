import React from 'react';

function AllClearBtn({ setTodoList }) {
	return (
		<>
			<span onClick={() => setTodoList([])}>
					모두 삭제
				</span>
		</>
	);
}

export default AllClearBtn;