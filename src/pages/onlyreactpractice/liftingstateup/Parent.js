import { useState } from "react";
import Child from "./Child";

const Parent = () => {
    const [isModalOpen , setIsModalOpen] = useState('');
    const toggleModal = () => {
const emailvalue = localStorage.getItem('SubmittedEmail');
if(!emailvalue){
setIsModalOpen(true);
console.log(emailvalue);
}
else{
    return null
}
    }
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button
        onClick={toggleModal}
        style={{
          padding: "10px 20px",
          backgroundColor: "#008CBA",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        open model
      </button>
      {isModalOpen && <Child onClose={() => setIsModalOpen(false)}/>}
    </div>
  );
};
export default Parent;
