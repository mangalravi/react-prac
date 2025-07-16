import { useEffect, useState } from "react";
import axios from "axios";

const PostData = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [success, setSuccess] = useState(null);
  const [response, setResponse] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    }
    if (name === "email") {
      setEmail(value);
    }
    if (name === "message") {
      setMessage(value);
    }
  };
  const handleChecked = (e) => {
    setIsChecked(e.target.checked);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(null);
    setError(null);
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (name.length < 3) {
      setError("name should be more then 3 ");
      return;
    }
    if (!regex.test(email)) {
      setError("Enter a Valid Email format");
      return;
    }
    if (!message) {
      setError("Enter Some Messege Please !!! ");
      return;
    }
    if (!isChecked) {
      setError("Please Accept T&C");
      return;
    }
    setError("");
    const formData = {
      name,
      email,
      message,
    };
    try {
      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        formData
      );
      setResponse(res.data);
      setSuccess("Form submitted successfully");
    } catch (err) {
      setError("Failed to post data");
      console.error(err);
    }
    setIsSubmitted(true);
  };
useEffect(() => {
  if (isSubmitted) {
    const timer = setTimeout(() => {
      setEmail("");
      setName("");
      setMessage("");
      setIsChecked(false);
      setResponse(null);
      setError(null);
      setSuccess(null);
      setIsSubmitted(false); 
    }, 5000);

    return () => clearTimeout(timer); 
  }
}, [isSubmitted]);
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Enter Your Name"
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Enter Your Email"
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Message</label>
        <input
          type="text"
          name="message"
          value={message}
          placeholder="Enter Your Message"
          onChange={handleChange}
        />
      </div>
      <div style={{ display: "flex" }}>
        <input type="checkbox" checked={isChecked} onChange={handleChecked} />
        <p>Accept it</p>
      </div>
      <button type="submit">Submit Form</button>
      {response && <p>Response: {JSON.stringify(response)}</p>}
      {error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <p style={{ color: "green" }}>{success}</p>
      )}
    </form>
  );
};
export default PostData;
