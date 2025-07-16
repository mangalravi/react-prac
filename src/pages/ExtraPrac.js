import { useState, useMemo } from "react";
import MemoizedComponent from "./MemoizeComponent";

const ExtraPrac = () => {
  const [value, setValue] = useState(0);
  const data = useMemo(() => ({ value }), [value]);
  return (
    <>
      <MemoizedComponent data={data} />
      <button onClick={() => setValue((v) => v + 1)}>Increment</button>
    </>
  );
};

export default ExtraPrac;
