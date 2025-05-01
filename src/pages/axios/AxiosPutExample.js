import React, { useState } from 'react';
import axios from 'axios';

const AxiosPutExample = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [responseData, setResponseData] = useState(null);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const updatedPost = {
      id: 1,
      title: title,
      body: body,
      userId: 1,
    };

    try {
      const response = await axios.put('https://jsonplaceholder.typicode.com/posts/1', updatedPost);
      console.log('PUT response:', response.data);
      setResponseData(response.data);
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  return (
    <div>
      <h2>Update Post (PUT)</h2>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          placeholder="Updated Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <textarea
          placeholder="Updated Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <br />
        <button type="submit">Update Post</button>
      </form>

      {responseData && (
        <div style={{ marginTop: '20px' }}>
          <h4>Updated Post:</h4>
          <p><strong>ID:</strong> {responseData.id}</p>
          <p><strong>Title:</strong> {responseData.title}</p>
          <p><strong>Body:</strong> {responseData.body}</p>
        </div>
      )}
    </div>
  );
};

export default AxiosPutExample;
