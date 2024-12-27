// src/pages/Page1.js
import React, { useState, useEffect } from 'react';
import Table from '../table';

const Page1 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Page 1</h1>
      <Table data={data} />
    </div>
  );
};

export default Page1;
