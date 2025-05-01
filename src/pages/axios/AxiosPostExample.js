import { useState } from 'react';
import axios from 'axios';

const AxiosPostExample = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [responseData, setResponseData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      title: title,
      body: body,
      userId: 1,
    };

    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost);
      setResponseData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button type="submit">Submit</button>

        {responseData && (
          <div>
            <h2>Response Data:</h2>
            <p>ID: {responseData.id + 12}</p>
            <p>Title: {responseData.title}</p>
            <p>Body: {responseData.body}</p>
          </div>
        )}
      </form>
    </>
  );
};

export default AxiosPostExample;
