import {useState} from 'react'

const RandomPasswordGeneretor = () => {
    const [password , setPassword] = useState('')
    const [length , setLength] = useState(12);
    const generateRandomPassword = (numlength) => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
        let result = '';
        for(let i =0 ; i < numlength; i++){
result += characters.charAt(Math.floor(Math.random() * length))
        }
        setPassword(result)
    }
  return (
    <div>
    <h2>Random Password Generator</h2>
    
    <label htmlFor="passwordLength">Password Length: </label>
    <input 
      type="number" 
      id="passwordLength"
      value={length} 
      onChange={(e) => setLength(e.target.value)} 
      min="1" 
      max="20"
    />
    
    <button onClick={() => generateRandomPassword(length)}>Generate Password</button>
    
    <div>
      <p><strong>Generated Password:</strong></p>
      <p>{password}</p>
    </div>
  </div>
  )
}

export default RandomPasswordGeneretor