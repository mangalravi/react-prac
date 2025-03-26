import { useState } from "react";

const Slider = () => {
  const imageArray = [
    'https://dummyjson.com/image/150',
    'https://dummyjson.com/icon/abc123/150',
    'https://dummyjson.com/image/400x200/008080/ffffff?text=Hello+Peter!&fontSize=16',
    'https://dummyjson.com/image/400x200/282828?fontFamily=pacifico&text=I+am+a+pacifico+font',
    'https://dummyjson.com/image/400x200?type=webp&text=I+am+a+webp+image',
  ];
  const [data, setData] = useState(imageArray);
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleprev = (e) => {
    e.preventDefault();
    setCurrentIndex(prev => prev === 0 ?data.length - 1 : prev -1);
  }
  const handlenext = (e) => {
    e.preventDefault();
    setCurrentIndex(prev => prev ===  data.length - 1 ? 0 : prev + 1);
  }
  return (
   <>
     <h1>Slider</h1>
      <div style={{ display: "flex", gap: "1rem" , justifyContent: "center",marginBottom: "1rem",}}>
      <button onClick={handleprev}>prev</button>
      <button onClick={handlenext}>next</button>
      </div>
      <div style={{ display: "flex", gap: "1rem" }}>
      <img src={imageArray[currentIndex]} alt={`slider ${currentIndex}`} style={{ width: '400px', height: 'auto' }} />
      </div>
   </>
  )
}

export default Slider