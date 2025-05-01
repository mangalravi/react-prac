import React , {useState} from 'react'

const Dropdown = () => {
    const items = ['Profile', 'Settings', 'Logout'];
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    }
  return (
    <>
    <select onClick={handleClick}>
        {items.map((item, index) => {
          return <option key={index}>{item}</option>;
        })}
      </select>
    </>
  )
}

export default Dropdown