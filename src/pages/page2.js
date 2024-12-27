// src/pages/Page2.js
import React from 'react';
import Table from '../table';

const Page2 = () => {
  // Example data for Page 2
  const data2 = [
    { name: 'Alice Brown', email: 'alice@example.com', phone: '555-123-4567' },
    { name: 'Bob Green', email: 'bob@example.com', phone: '555-987-6543' },
    // Add more rows as needed
  ];

  return (
    <div>
      <h1>Page 2</h1>
      <Table data={data2} />
    </div>
  );
};

export default Page2;
