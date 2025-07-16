import { useState } from "react";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    comments: "",
  });

  const nextStep = () => setStep(step + 1);
  const previousStep = () => setStep(step - 1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("formData", JSON.stringify(formData));
    console.log("Form submitted:", formData);
  };
  const Step1 = ({ next, formData, handleChange }) => (
    <div className="step-container">
      <h2>Step 1</h2>
      <div className="input-container">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />
      </div>
      <button onClick={next} className="next-btn">
        Next
      </button>
    </div>
  );

  const Step2 = ({ next, previous, formData, handleChange }) => (
    <div className="step-container">
      <h2>Step 2</h2>
      <div className="input-container">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
      </div>
      <div className="input-container">
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Enter your age"
        />
      </div>
      <button onClick={previous} className="prev-btn">
        Previous
      </button>
      <button onClick={next} className="next-btn">
        Next
      </button>
    </div>
  );

  const Step3 = ({ previous, formData, handleSubmit }) => (
    <div className="step-container">
      <h2>Step 3</h2>
      <div className="input-container">
        <label htmlFor="comments">Comments:</label>
        <textarea
          id="comments"
          name="comments"
          value={formData.comments}
          onChange={handleChange}
          placeholder="Enter any comments"
        ></textarea>
      </div>
      <button onClick={previous} className="prev-btn">
        Previous
      </button>
      <button type="submit" onClick={handleSubmit} className="submit-btn">
        Submit
      </button>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="form-container">
      {step === 1 && (
        <Step1
          next={nextStep}
          formData={formData}
          handleChange={handleChange}
        />
      )}
      {step === 2 && (
        <Step2
          next={nextStep}
          previous={previousStep}
          formData={formData}
          handleChange={handleChange}
        />
      )}
      {step === 3 && (
        <Step3
          previous={previousStep}
          formData={formData}
          handleSubmit={handleSubmit}
        />
      )}
    </form>
  );
};

export default MultiStepForm;
