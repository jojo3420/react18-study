import React, { createContext, useReducer } from 'react';
import { counterReducer, initState } from "../reducer/counterReducer.js";


const CounterContext = createContext({ count: 0, dispatch: () => {} });

function CounterProvider({ children }) {
	const [state, dispatch] = useReducer(counterReducer, initState);

	return (
		<CounterContext.Provider value={{ state, dispatch }}>
			{children}
		</CounterContext.Provider>
	);
}

export { CounterContext, CounterProvider };




