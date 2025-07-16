import {useState} from 'react';
import ReactmemokauseChild from './ReactmemokauseChild';

const Reactmemokause = () => {
  const [count, setCount] = useState(0);
  const handnleClick = () => {
    setCount(count + 1);
  }
  return (
    <div>
      <h1>React Memo Example</h1>
      <p>Count: {count}</p>
      <button onClick={handnleClick}>Increment Count</button>
    <ReactmemokauseChild  name="Ravi" />
    </div>
  )
}

export default Reactmemokause
