import React, { useRef, useEffect, useState } from "react";

function UseRefDemo() {
  const inputRef = useRef(null);
  const renderCount = useRef(0);
  const prevCountRef = useRef();
  const intervalRef = useRef();
  const [count, setCount] = useState(0);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  useEffect(() => {
    renderCount.current += 1;
  });
  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      console.log("Interval running...");
    }, 2000);

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div style={{ padding: "1rem", fontFamily: "sans-serif" }}>
      <h2>useRef Full Demo</h2>
      <input ref={inputRef} placeholder="I will be focused on mount" />

      <div style={{ marginTop: "1rem" }}>
        <button onClick={() => setCount((prev) => prev + 1)}>
          Increment Count
        </button>
      </div>

      <p>Current Count: {count}</p>
      <p>Component Rendered: {renderCount.current} times</p>

      <p>Previous Count: {prevCountRef.current ?? "N/A"}</p>
      <p>Open the console to see interval logs (every 2s)</p>
    </div>
  );
}

export default UseRefDemo;
