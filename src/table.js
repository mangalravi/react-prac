import React, { useState, useEffect } from "react";
import Model from "./Model";
import Dropdown from "./Dropdown";
import EmpList from "./EmpList";
import FormHandleing from "./FormHandleing";

const Table = ({ data }) => {
  const [searchRes, setSearchRes] = useState(data); 
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setSearchRes(data); 
   }, [data]);

  const filterData = (e) => {
    const search = e.target.value;
    setSearchTerm(search); 
    if (search === "") {
      setSearchRes(data); 
    } else {
     const filteredRows = data.filter((row) =>
        row.name.toLowerCase().includes(search.toLowerCase()) ||
        row.phone.toLowerCase().includes(search.toLowerCase())
      );
      setSearchRes(filteredRows);
    }
  };
 // Loading spinner while waiting for data
 if (loading) {
  return <div>Loading...</div>;
}
  return (
    <>
      <input
        type="text"
        placeholder="Search by Name or Phone"
        value={searchTerm} 
        onChange={filterData} 
      />
      <table className="table">
        <thead>
          <tr>
            <th>sn</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {searchRes.length > 0 ? (
            searchRes.map((row, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{row.name}</td>
                <td>{row.email}</td>
                <td>{row.phone}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No results found</td>
            </tr>
          )}
        </tbody>
      </table>
      <Model />
      <Dropdown />
      <EmpList />
      <FormHandleing />
    </>
  );
};

export default Table;


