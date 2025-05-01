import CustomFetchHook from "./CustomFetchHook";

const UseCustomFetchHook = () => {
  const { data, loading, error } = CustomFetchHook(
    "https://jsonplaceholder.typicode.com/todos"
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return  <ul>
  {data.map((item) => (
    <li key={item.id}>
      <p><strong>ID:</strong> {item.id}</p>
      <p><strong>Title:</strong> {item.title}</p>
      <p><strong>Completed:</strong> {item.completed ? "Yes" : "No"}</p>
    </li>
  ))}
</ul>
};

export default UseCustomFetchHook;
