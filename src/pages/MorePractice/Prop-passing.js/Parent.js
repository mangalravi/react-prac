import {useState} from 'react';
import Child from "./Child"

const Parent = () => {
      const imageArray = [
    'https://dummyjson.com/image/150',
    'https://dummyjson.com/icon/abc123/150',
    'https://dummyjson.com/image/400x200/008080/ffffff?text=Hello+Peter!&fontSize=16',
    'https://dummyjson.com/image/400x200/282828?fontFamily=pacifico&text=I+am+a+pacifico+font',
    'https://dummyjson.com/image/400x200?type=webp&text=I+am+a+webp+image',
  ];
    const [hide , setHide] = useState()
      const [data, setData] = useState(imageArray);
  const [currentIndex, setCurrentIndex] = useState(0);
    const handleToggle = e => {
        e.preventDefault();
        setHide(prevHide => !prevHide)
    }
    const handleprev = e => {
        e.preventDefault();
       setCurrentIndex(prev => prev === 0 ?data.length - 1 : prev -1);
    }
    const handlenext = e => {
        setCurrentIndex(prev => prev === data.length - 1 ? 0 : prev + 1);
    }
   
  return (
    <>
     <div style={{ display: "flex", gap: "1rem" , justifyContent: "center",marginBottom: "1rem",}}>
      <button onClick={handleprev}>prev</button>
      <button onClick={handlenext}>next</button>
      </div>
     <Child 
        mainheading = "this is main heading"
        mainpara1 = "this is main para 1"
        mainpara2 = "this is main para2"
        hide = {hide}
        imageArray = {imageArray}
        data = {data}
        currentIndex = {currentIndex}
    />
    <button onClick={handleToggle}>toggle</button>
    </>
   
  )
}

export default Parent