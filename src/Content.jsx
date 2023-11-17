/* eslint-disable no-unused-vars */
import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Signup } from "./Signup";
import { AllPosts } from "./AllPosts";
import { NewPost } from "./NewPost";
import { PostsShow } from "./PostsShow";
import { Modal } from "./Modal";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { About } from "./About";

export function Content() {
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);

  const [posts, setPosts] = useState([]);

  const [currentPost, setCurrentPost] = useState({});

  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then((response) => {
      console.log(response.data);
      setPosts(response.data);
    });
  };

  const handleShowPost = (post) => {
    setIsPostsShowVisible(true);
    setCurrentPost(post);
  };

  const handleClose = () => {
    setIsPostsShowVisible(false);
  };

  const handleCreatePost = (params) => {
    axios.post("http://localhost:3000/posts.json", params).then((response) => {
      setPosts([...posts, response.data]);
    });
  };

  const handleUpdatePost = (id, params) => {
    axios.patch(`http://localhost:3000/posts/${id}.json`, params).then((response) => {
      setPosts(
        posts.map((post) => {
          if (post.id === response.data.id) {
            return response.data;
          } else {
            return post;
          }
        })
      );
      setCurrentPost(response.data);
      setIsPostsShowVisible(false);
    });
  };

  const handleDestroyPost = (post) => {
    axios.delete(`http://localhost:3000/posts/${post.id}.json`).then((response) => {
      setPosts(posts.filter((p) => p.id !== post.id));
      handleClose();
    });
  };

  useEffect(handleIndexPosts, []);

  return (
    <div className="container">
      <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<LogoutLink />} />
        <Route path="/posts/new" element={<NewPost onCreatePost={handleCreatePost} />} />
        <Route path="/posts" element={<AllPosts posts={posts} onShowPost={handleShowPost} />} />
      </Routes>

      <Modal show={isPostsShowVisible} onClose={handleClose}>
        <PostsShow post={currentPost} onUpdatePost={handleUpdatePost} onDestroyPost={handleDestroyPost} />
      </Modal>
    </div>
  );
}
