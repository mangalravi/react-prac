import { useState} from "react"

const Child = ({onClose}) => {
const [email , setEmail] = useState('');
const [error , setError] = useState('');


const handleEmailChange = (e) => {
let value = e.target.value;
setEmail(value);
setError('');
}
const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = () => {
    if (validateEmail(email)) {
      localStorage.setItem("SubmittedEmail", email);
      alert("Email submitted successfully!");
      onClose();
    } else {
      setError("Please enter a valid email address.");
    }
  };

    const modalStyle = {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      };
    
      const modalContentStyle = {
        background: "white",
        padding: "20px",
        borderRadius: "8px",
        textAlign: "center",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
        position: "relative",
        width: "300px",
      };
    
      const closeBtnStyle = {
        position: "absolute",
        top: "10px",
        right: "15px",
        fontSize: "20px",
        cursor: "pointer",
      };
return (
    <div style={modalStyle}>
    <div style={modalContentStyle}>
      <span style={closeBtnStyle} onClick={onClose}>
        &times;
      </span>
      <h2>Enter Your Email</h2>
      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Enter your email"
        style={{ padding: "8px", width: "100%", margin: "10px 0" }}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button
        onClick={handleSubmit}
        style={{
          padding: "10px 20px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          marginTop: "10px",
        }}
      >
        Submit
      </button>
    </div>
  </div>
)
}

export default Child ;