import React, { useState } from "react";
import LoginForm from "./LoginForm";
import RegistrationForm from './RegistrationForm';
import Dashboard from './Dashboard';

const LoginRegistrationForm = () => {
  const [authType, setAuthType] = useState("login");

  return (
    <div>
    <h1 style={{ textAlign: "center", marginBottom: "20px" }}>LoginRegistrationForm</h1>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <button onClick={() => setAuthType("login")}>Login</button>
        <button onClick={() => setAuthType("sign-up")}>Sign Up</button>
      </div>
      
      {authType === "login" ? <LoginForm /> : <RegistrationForm />}
    </div>
  );
};

export default LoginRegistrationForm;
