import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

const CrudRealTime = () => {
  const [posts, setPosts] = useState();
  const [newPost, setNewPost] = useState({ title: "", body: "" });
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    try {
      const resposnse = await axios(API_URL);
      console.log(resposnse);
      setPosts(resposnse.data);
      setLoading(false);
    } catch (err) {
      console.log("Error :", err);
    }
  };
  const handleCreate = async () => {
    try {
      const response = await axios.post(API_URL, newPost);
      setPosts([response.data, ...posts]);
      setNewPost({ title: "", body: "" });
    } catch (err) {
      console.log("Error creating phase:", err);
    }
  };
//   const handleUpdate = async (id) => {
//     try {
//         debugger;
//       const updatedPost = { title: "Updated Title", body: "Updated Body" };
//       await axios.put(`${API_URL}/${id}`, updatedPost);
//       setPosts(posts.map(post => (post.id === id ? { ...post , ...updatedPost } : post)));
//     } catch (err) {
//       console.log("Error updating phase:", err);
//     }
//   };

const handleUpdate = async (id) => {
    const post = posts.find(post => post.id === id);
    const newTitle = prompt("Enter new title:", post.title);
    const newBody = prompt("Enter new body:", post.body);

    if (newTitle && newBody) {
      try {
       debugger;
        const updatedPost = { title: newTitle, body: newBody };
        await axios.put(`${API_URL}/${id}`, updatedPost);

        // ✅ Update UI state
        setPosts((prevPosts) =>
          prevPosts.map((post) =>
            post.id === id ? { ...post, ...updatedPost } : post
          )
        );

        alert("Post updated successfully!");
      } catch (err) {
        console.log("Error updating post:", err);
        alert("Failed to update the post.");
      }
    } else {
      alert("Update canceled. Both title and body are required.");
    }
  };
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setPosts(posts.filter((res) => res.id !== id));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div style={{ padding: "20px" }}>
      <h1>CRUD Operations with Axios</h1>

      {/* CREATE Post */}
      <div>
        <h3>Create New Post</h3>
        <input
          type="text"
          placeholder="Title"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          style={{ margin: "5px", padding: "5px" }}
        />
        <textarea
          placeholder="Body"
          value={newPost.body}
          onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
          style={{ margin: "5px", padding: "5px" }}
        />
        <button onClick={handleCreate} style={{ padding: "5px 10px" }}>
          Create Post
        </button>
      </div>

      <hr />

      {/* READ Posts */}
      <h3>Posts List</h3>
      {loading ? (
        <p>Loading...</p>
      ) : (
        posts.map((post) => (
          <div
            key={post.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              margin: "10px 0",
            }}
          >
            <h4>{post.title}</h4>
            <p>{post.body}</p>
            <button
              onClick={() => handleUpdate(post.id)}
              style={{ marginRight: "5px" }}
            >
              Update
            </button>
            <button
              onClick={() => handleDelete(post.id)}
              style={{ backgroundColor: "red", color: "white" }}
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default CrudRealTime;
