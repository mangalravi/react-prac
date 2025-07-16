import axios from "axios";
import React, { useState, useEffect } from "react";

const ImageDownloader = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios("https://picsum.photos/v2/list?page=2&limit=200")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // db.responsedsds.aggregate([
  //   {
  //   $project: {
  //     "name": 1,
  //     "cuisine": 1,
  //     "address": 1
  //   }
  // },
  // {
  // $limit : 5,
  // }
  // ])

  return (
    <>
      {data.length > 0 ? (
        data.slice(0, 10).map((item, index) => (
          <div
            key={index}
            style={{ display: "inline-block", textAlign: "center" }}
          >
            <a href={item.download_url}>
              <img
                src={item.download_url}
                alt={item.author}
                style={{
                  width: "200px",
                  height: "200px",
                  margin: "10px",
                  cursor: "pointer",
                }}
              />
              <p>{item.author}</p>
            </a>
          </div>
        ))
      ) : (
        <p>Loading images...</p>
      )}
    </>
  );
};

export default ImageDownloader;
