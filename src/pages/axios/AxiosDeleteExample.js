import { useState } from "react";
import axios from "axios";

const AxiosDeleteExample = () => {
  const [postId, setPostId] = useState("");
  const [statusMsg, setStatusMsg] = useState("");

  const handleDelete = async (e) => {
    e.preventDefault();

    if (!postId) {
      setStatusMsg("Please enter a valid Post ID");
      return;
    }

    try {
      await axios.delete(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      setStatusMsg(
        `Post with ID ${postId} deleted successfully (fake delete).`
      );
      setPostId("");
    } catch (error) {
      console.error("Delete failed:", error);
      setStatusMsg("Failed to delete the post.");
    }
  };

  return (
    <div>
      <h2>Delete a Post (axios.delete)</h2>
      <form onSubmit={handleDelete}>
        <input
          type="number"
          placeholder="Enter Post ID to delete"
          value={postId}
          onChange={(e) => setPostId(e.target.value)}
        />
        <button type="submit">Delete Post</button>
      </form>

      {statusMsg && (
        <p style={{ marginTop: "10px", color: "green" }}>{statusMsg}</p>
      )}
    </div>
  );
};

export default AxiosDeleteExample;
