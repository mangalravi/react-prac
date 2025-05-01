import React, { useState } from "react";
import Login from "./Login";
import SignUp from './SignUp'

const LoginSignUp = () => {
  const [authType, setAuthType] = useState("login");

  return (
    <div>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <button onClick={() => setAuthType("login")}>Login</button>
        <button onClick={() => setAuthType("sign-up")}>Sign Up</button>
      </div>
      
      {authType === "login" ? <Login /> : <SignUp />}
    </div>
  );
};

export default LoginSignUp;
