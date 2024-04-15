import React, { useContext } from 'react';
import './style/Counter.css';
import { CounterContext } from "../../context/CounterContext.jsx"


function Counter() {
	const { state, dispatch } = useContext(CounterContext);

	return (
		<div className={`counter-container`}>
			<h2>Counter</h2>
			<div>
				<button
					className={`counter-button`}
					onClick={() => dispatch({ type: 'RESET'})}>Reset</button>
			</div>
			<div>
				<div className={`counter`}>{state.count}</div>
				<button
					className={`counter-button`}
					onClick={() => dispatch({ type: 'INCREMENT'})}>Increase</button>
				<button
					className={`counter-button`}
					onClick={() => dispatch({ type: 'DECREMENT'})}>Decrease</button>
			</div>
		</div>
	);
}

export default Counter;