// src/pages/Page1.js
import React, { useState, useEffect } from "react";
import Table from "../table";

const Page1 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data1) => setData(data1));
  }, []);

  return (
    <>
      <h1>Page 1</h1>
      <Table data={data} />
    </>
  );
};

export default Page1;
