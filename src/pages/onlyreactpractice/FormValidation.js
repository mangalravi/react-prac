import React, { useState } from 'react';

// useForm hook for form state management and validation
const useForm = (initialValues, validate) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });

    const error = validate({ [name]: value });
    setErrors({ ...errors, [name]: error[name] });
  };

  const handleSubmit = (callback) => (e) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      callback(values); // Pass values to the callback on successful validation
    }
  };

  return { values, errors, handleChange, handleSubmit };
};

// Main Form component
const Form = ({ onSubmit }) => {
  const initialValues = { username: '', email: '' };

  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = 'Username is required';
    }
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email is invalid';
    }
    return errors;
  };

  // Using the useForm hook
  const { values, errors, handleChange, handleSubmit } = useForm(initialValues, validate);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Username</label>
        <input name="username" value={values.username} onChange={handleChange} />
        {errors.username && <p>{errors.username}</p>}
      </div>
      <div>
        <label>Email</label>
        <input name="email" value={values.email} onChange={handleChange} />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

// Parent Component
const App = () => {
  const handleSubmit = (formData) => {
    console.log('Form submitted:', formData);
    // handle form submission, e.g., send formData to an API
  };

  return (
    <div>
      <h1>Form Validation</h1>
      <Form onSubmit={handleSubmit} />
    </div>
  );
};

export default App;
