import axios from "axios";
import { useState, useEffect } from "react";
import { AllPosts } from "./AllPosts";
import { NewPost } from "./NewPost";
import { Modal } from "./Modal";

export function Content() {
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);

  const [posts, setPosts] = useState([]);

  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then((response) => {
      console.log(response.data);
      setPosts(response.data);
    });
  };

  const handleShowPost = () => {
    setIsPostsShowVisible(true);
  };

  const handleClose = () => {
    setIsPostsShowVisible(false);
  };

  useEffect(handleIndexPosts, []);

  return (
    <div>
      <NewPost />
      <AllPosts posts={posts} onShowPost={handleShowPost} />
      <Modal show={isPostsShowVisible} onClose={handleClose}>
        <p>Welcome to my little slice of heaven.</p>
      </Modal>
    </div>
  );
}
