import { useState, useEffect } from 'react';
import axios from 'axios'; 

export default function  Api() {
  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [search, setSearch] = useState('');
  const [newUser, setNewUser] = useState(
    {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    gender: '',
    image: ''
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/users");
        setOriginalData(response.data.users);
        setData(response.data.users);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
 const handleFilter = (e) => {
    e.preventDefault();
    const search = e.target.value;
    setSearch(search);
    if (search === "") {
      setData(originalData);
    } else {
      const filteredData = originalData.filter(user =>
        user.firstName.toLowerCase().includes(search.toLowerCase()) ||
        user.phone.toLowerCase().includes(search.toLowerCase())
      );
      setData(filteredData);
    }
  };
 const clearsearch = () => {
    setSearch('');
    setData(originalData);
  };
 const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({
      ...newUser,
      [name]: value
    });
  };
 const handleSubmit = (e) => {
    e.preventDefault();
  axios.post('https://dummyjson.com/users/add', newUser) 
      .then(response => {
        console.log('New user added:', response.data);
        setOriginalData([...originalData, response.data]); 
        setData([...data, newUser]); 
        setNewUser({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          gender: '',
          image: ''
        });
      })
      .catch((error) => {
        console.error('Error adding user:', error);
      });
  };

  const imagestyle = {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
  };

  return (
    <div>
      <div style={{ margin: "1rem", display: "flex", justifyContent: "center" }}>
        <input
          type="text"
          placeholder="find users by name & number"
          onChange={handleFilter}
        />
        <button onClick={clearsearch}>clear</button>
      </div>

      <table border={1} style={{ width: "100%", marginBottom: "3rem" , borderCollapse: "collapse"}}>
        <thead>
          <tr>
            <th>S.N.</th>
            <th>Image</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td><img src={user.image} style={imagestyle} alt="user" /></td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.gender}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Form to add a new user */}
      <div style={{ marginTop: '2rem' }}>
        <h3>Add New User</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={newUser.firstName}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={newUser.lastName}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={newUser.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={newUser.phone}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="gender"
            placeholder="Gender"
            value={newUser.gender}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={newUser.image}
            onChange={handleInputChange}
            required
          />
          <button type="submit">Add User</button>
        </form>
      </div>
    </div>
  );
}
