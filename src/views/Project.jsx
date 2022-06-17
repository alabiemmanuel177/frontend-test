import React from "react";
import { useEffect, useState } from "react";
import "./project.css";
import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/footer/Footer";
import axios from "axios";
import { Posts } from "../components/posts/Posts";
import config from "../config";
export const Project = ()=> {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async ()=> {
      const res = await axios.get(`${config.baseURL}/posts`);
      setPosts(res.data)
    };
    fetchPosts();
  }, []);

  return (
    <div className="Project">
      <Navbar />
      <Posts posts={posts} />        
      <Footer />
    </div>
  );
};
