import React, { useState, useEffect } from "react";

const SearchBar = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data.users);
        setSearchResults(data.users);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const SearchItem = (e) => {
    const search = e.target.value;

    if (search === "") {
      setSearchResults(data);
    } else {
      const filteredData = data.filter(
        (item) =>
          item.firstName &&
          item.firstName.toLowerCase().includes(search.toLowerCase())
      );

      setSearchResults(filteredData);
    }
  };

  return (
    <>
      <input type="text" placeholder="Search..." onChange={SearchItem} />
      <ul>
        {searchResults.length > 0 ? (
          searchResults.map((item) => {
            return <li key={item.id}>{item.firstName}</li>;
          })
        ) : (
          <li>No Data found</li>
        )}
      </ul>
    </>
  );
};

export default SearchBar;
