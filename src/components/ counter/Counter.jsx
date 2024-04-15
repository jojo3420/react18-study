import React from 'react';
import { useRecoilState } from 'recoil';
import { counterActions } from '../../recoilState/recoilSelectors.js';


function Counter() {
  const [count, dispatch] = useRecoilState(counterActions);

  const handleIncrease = () => {
    dispatch({ type: 'INCREASE' });
  }
  const handleDecrease = () => {
    dispatch({ type: 'DECREASE' });
  }

  const handleReset = () => {
    dispatch({ type: 'RESET' });
  }

  return (
    <div>
      <h2>Counter</h2>
      <div>{count}</div>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Counter;