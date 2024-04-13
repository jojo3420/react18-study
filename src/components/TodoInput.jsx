import React from 'react';

function TodoInput({ text, handleText, handleAdd }) {
	return (
		<>
			<button onClick={() => handleText('')}>clear</button>
			<input value={text} onChange={({ target }) => handleText(target.value)} />
			<button onClick={handleAdd}>
				Add
			</button>
		</>
	);
}

export default TodoInput;