import React, { useState, useMemo } from 'react';

function Usememokause() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(0);

  // Expensive calculation
  const expensiveValue = useMemo(() => {
    console.log('Calculating expensive value...');
  }, [count]);

  return (
    <div>
      <h1>Expensive Computation with useMemo</h1>
      <p>Count: {count}</p>
      <p>Expensive Value: {expensiveValue}{otherState}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setOtherState(otherState + 5)}>Toggle Other State</button>
    </div>
  );
}

export default Usememokause;
