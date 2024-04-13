import React from 'react';

function AllClearBtn({ dispatch }) {
	return (
		<>
			<span onClick={() => dispatch({ type: 'ALL_CLEAR' })}>
					모두 삭제
				</span>
		</>
	);
}

export default AllClearBtn;