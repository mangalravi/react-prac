import { useState } from "react";

const FormValidation = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    select : "one",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});
    const { email, name, select , password } = formData;
    let validationErrors = {};

    if (!email) {
      validationErrors.email = "Email is required";
    } else {
      validationErrors.email = "Please enter a valid email";
    }
    if (!name) {
      validationErrors.name = "name is required";
    } else {
      validationErrors.name = "Please enter a valid name";
    }
    if (!select) {
      validationErrors.select = "select is required";
    } else {
      validationErrors.select = "select one of them ";
    }
    if (!password) {
      validationErrors.password = "password is required";
    } else {
      validationErrors.password = "Please enter a valid password";
    }
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    alert("Form submitted successfully!");
  };
  return (
    <form style={{ width: "300px", margin: "auto" }} onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </div>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
      </div>
      <div>
        <label>select:</label>
        <select>
          <option value="one">one</option>
          <option value="two">two</option>
          <option value="three">three</option>
          <option value="four">four</option>
        </select>
        {errors.select && <p style={{ color: "red" }}>{errors.select}</p>}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
      </div>

      <button type="submit">Login</button>
    </form>
  );
};

export default FormValidation;
