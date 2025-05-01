import React , {useState} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    const incCounter = () => {
        setCount(count + 1);
    }
    const decCounter = () => {
        if(count >=0){
            setCount(0);
        }else{
            setCount(count - 1)
        }
    };
  return (
    <div style={{display: "flex", gap: "1rem", justifyContent: "center", marginBottom: "1rem"}}>
      <button onClick={decCounter}>-</button>
      <h2>{count}</h2>
      <button onClick={incCounter}>+</button>
    </div>
  )
}

export default Counter