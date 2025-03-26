import React, { useState, useEffect } from 'react';

const EmpList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://dummy.restapiexample.com/api/v1/employees')
      .then(res => res.json())
      .then(data => setData(data.data)) 
      .catch(error => console.error('Error fetching data:', error)); 
  }, []);

  return (
    <ul>
      {
         data.slice(1,7).map(item => (
          <li key={item.id}>{item.employee_name}</li>
        ))
      }
    </ul>
  );
};

export default EmpList;
