import { useState, useEffect } from "react";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkToggle, setCheckToggle] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") setName(value);
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedEmail = email.trim().toLowerCase();
    const trimmedPassword = password.trim();
    const trimmedName = name.trim();

    let emailregex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (!trimmedName) return setError("Name is required");
    if (!trimmedEmail) return setError("Email is required");
    if (!emailregex.test(trimmedEmail)) return setError("Invalid email format");
    if (!trimmedPassword) return setError("Password is required");
    if (trimmedPassword.length < 10) return setError("Password must be at least 10 characters");
    if (!checkToggle) return setError("Checkbox is required");

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Check for duplicate email
    const existingUser = storedUsers.find(user => user.email === trimmedEmail);
    if (existingUser) return setError("User already registered with this email");

    const userData = {
      name: trimmedName,
      email: trimmedEmail,
      password: trimmedPassword,
    };

    storedUsers.push(userData);
    localStorage.setItem("users", JSON.stringify(storedUsers));

    setSuccess("Registration successful!");
    setName("");
    setEmail("");
    setPassword("");
    setCheckToggle(false);
    setError("");
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
      <h1>Register</h1>
      <div>
        <label>Name</label>
        <input type="text" name="name" value={name} onChange={handleChange} placeholder="Enter your name" />
      </div>
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
        <button type="submit">Register</button>
      </div>
      {success && <p style={{ color: "green" }}>{success}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};

export default RegistrationForm;
