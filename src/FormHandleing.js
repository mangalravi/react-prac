import React,{useState} from 'react'

const FormHandleing = () => {
    const [name, setName] = useState("");
    const [error, setError] = useState('');
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleNameChange = (e) => {
        const name = e.target.value;
        if(name.length < 3){
            setError("Name must be 3 characters");
        }
        else{
            setError("");
        }
        setName(name);
    };
    const handleEmailChange = (e) => {
        let regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
        if(!regex.test(e.target.value)){
            setError("Invalid Email");
        }
        else{
            setError("");
        };
        setEmail(e.target.value);
};
    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };
    const handleSubmit = (e) => {
       console.log("Name:", name);
       console.log("Email:", email);    
         console.log("Message:", message);
    };
  return (
    <form onSubmit={handleSubmit}>
    <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={handleNameChange } />{name}
    </div>
    <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmailChange} />{email}
    </div>
    <div>
        <label>Message:</label>
        <textarea value={message} onChange={handleMessageChange} /> {message}
    </div>
    <button type="submit">Submit</button>
</form>
  )
}

export default FormHandleing