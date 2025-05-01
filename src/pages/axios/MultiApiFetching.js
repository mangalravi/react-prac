import { useState, useEffect } from "react";

const MultiApiFetching = () => {
  const [data1, setData1] = useState();
  const [data2, setData2] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const [data1, data2] = await Promise.all([
          fetch("https://jsonplaceholder.typicode.com/posts/1").then((res) =>
            res.json()
          ),
          fetch("https://jsonplaceholder.typicode.com/posts/2").then((res) =>
            res.json()
          ),
        ]);

        if (!data1 || !data2) {
          throw new Error("Data not found");
        }

        setData1(data1);
        setData2(data2);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchData(); // Actually call the fetch function
  }, []);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <>
      <h2>Data 1:</h2>
      <pre>{JSON.stringify(data1, null, 2)}</pre>

      <h2>Data 2:</h2>
      <pre>{JSON.stringify(data2, null, 2)}</pre>
    </>
  );
};

export default MultiApiFetching;
