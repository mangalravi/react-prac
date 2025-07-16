import { useState, useEffect } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkToggle, setCheckToggle] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedEmail = email.trim().toLowerCase();
    const trimmedPassword = password.trim();
    let emailregex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (!trimmedEmail) return setError("Email is required");
    if (!emailregex.test(trimmedEmail)) return setError("Invalid email format");
    if (!trimmedPassword) return setError("Password is required");
    if (!checkToggle) return setError("Checkbox is required");

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = storedUsers.find(user => 
      user.email === trimmedEmail && user.password === trimmedPassword
    );

    if (!foundUser) {
      setError("Email or password is incorrect.");
      return;
    }

    setSuccess("Login successful!");
    setError("");
    setEmail("");
    setPassword("");
    setCheckToggle(false);
  };

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess("");
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [success]);

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <div>
        <label>Email</label>
        <input type="email" name="email" value={email} onChange={handleChange} placeholder="Enter your email" />
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password" value={password} onChange={handleChange} placeholder="Enter your password" />
      </div>
      <div>
        <input type="checkbox" checked={checkToggle} onChange={(e) => setCheckToggle(e.target.checked)} />
        <button type="submit">Login</button>
      </div>
      {success && <p style={{ color: "green" }}>{success}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};

export default LoginForm;
