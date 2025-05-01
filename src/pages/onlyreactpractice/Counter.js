import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const incCounter = () => {
    setCount(count + 1);
  };
  const decCounter = () => {
    // count <= 0 ? setCount(0) : setCount(count - 1);
    setCount(count <= 0 ? 0 : (count === 10 ? 3 : count - 1) )
  };
  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        justifyContent: "center",
        marginBottom: "1rem",
      }}
    >
      <button onClick={decCounter}>-</button>
      <h2>{count}</h2>
      <button onClick={incCounter}>+</button>
    </div>
  );
};

export default Counter;
