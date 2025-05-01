import React , {useState , useEffect} from 'react'

const ToDo = () => {
  const [text, setText] = useState('');
const [todos, setTodos] = useState(() => {
  const savedTodos = localStorage.getItem('todos');
  return savedTodos ? JSON.parse(savedTodos) : [];
});
useEffect(() => {
localStorage.setItem('todos' , JSON.stringify(todos));
})
  const addTodo = () => {
    if(text){
      setTodos([ {text , completed: false} , ...todos]);
      setText('');
    }
  }
  const handleToggle = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  }
  const handleUpdate = (index) => {
    const newTodos = [...todos];
    const updatedText = prompt('Update your task' , newTodos[index].text);
    if(updatedText){
      newTodos[index].text = updatedText;
      setTodos(newTodos);
    }
  }
  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index,1);
    setTodos(newTodos);
  }
  return (
    <>
    <div style={{display: 'flex' , gap: '1rem'}}>
      <input type='text' value={text} onChange = {(e) => setText(e.target.value)} placeholder='Enter your task' />
      <button onClick={addTodo}>Add</button>
    </div>

      <ul style={{listStyleType: 'none' , padding: 0}}>
      {
        todos.map((todo,index) => {
       return ( <li key={index} style={{textDecoration: todo.completed ? 'line-through' : 'none',marginBottom:' 1rem'}}>
        {todo.text}
          <button onClick={() => handleToggle(index)} style={{margin: '0 0.75rem'}}>toggle</button>
          <button onClick={() => handleUpdate(index)} style={{margin: '0 0.75rem'}}>Update</button>
          <button onClick={() => handleDelete(index)}>Delete</button>
        </li>)
        })
      }
      </ul>
     
    </>
  )
}

export default ToDo