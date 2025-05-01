import React , {useState} from 'react'


const ToggleSwitch = () => {
    const [ison, setIson] = useState(false);
    const togglebtn = () => {
        setIson(!ison);
    }
  return (
   <>
     <div>ToggleSwitch {ison ? "ON" : "OFF"}</div>
     <button onClick={togglebtn}>toggle</button>
   </>
  )
}

export default ToggleSwitch