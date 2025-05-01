import React, { useState, useEffect } from 'react';

const SearchBar = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // Debugging the API response
        setData(data.users);  
        setSearchResults(data.users);  
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const SearchItem = (e) => {
    const search = e.target.value;

    // If search is empty, reset to full data
    if (search === "") {
      setSearchResults(data);
    } else {
      // Filter data based on firstName
      const filteredData = data.filter((item) =>
        item.firstName && item.firstName.toLowerCase().includes(search.toLowerCase())
      );

      // If no filtered data, show empty list
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
