import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  
  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validate login fields
  const validateFields = () => {
    const { email, password } = formData;
    let validationErrors = {};

    if (!email) { 
      validationErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = "Please enter a valid email address.";
    }

    if (!password) {
      validationErrors.password = "Password is required.";
    } else if (password.length < 6 || password.length > 20) {
      validationErrors.password = "Password must be between 6 and 20 characters.";
    }

    return validationErrors;
  };

  // Handle login form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});
    const validationErrors = validateFields();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Check user credentials in localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      u => u.email === formData.email && u.password === formData.password
    );

    if (user) {
      alert("Login successful!");
    } else {
      setErrors({ email: "Invalid email or password." });
    }
  };

  return (
    <div style={{ width: "300px", margin: "auto", padding: "20px", border: "1px solid #ddd", borderRadius: "8px" }}>
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
