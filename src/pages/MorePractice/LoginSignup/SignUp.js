import React, { useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
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

  // Validate sign-up fields
  const validateFields = () => {
    const { email, name, password } = formData;
    let validationErrors = {};

    if (!email) {
      validationErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = "Please enter a valid email address.";
    }

    if (!name) {
      validationErrors.name = "Name is required.";
    } else if (name.length < 3 || name.length > 20) {
      validationErrors.name = "Name must be between 3 and 20 characters.";
    }

    if (!password) {
      validationErrors.password = "Password is required.";
    } else if (password.length < 6 || password.length > 20) {
      validationErrors.password = "Password must be between 6 and 20 characters.";
    }

    return validationErrors;
  };

  // Handle sign-up form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});
    const validationErrors = validateFields();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Save user data to localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(formData);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Sign-up successful!");
  };

  return (
    <div style={{ width: "300px", margin: "auto", padding: "20px", border: "1px solid #ddd", borderRadius: "8px" }}>
      <h3>Sign Up</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </div>
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
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
