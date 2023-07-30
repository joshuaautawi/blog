import React, { useEffect, useState } from 'react';
import axios from 'axios';
export const Menu = ({ category }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fectchData = async () => {
      try {
        const res = await axios.get('http://localhost:8800/api/posts/?' + category);
        setPosts(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    fectchData();
  }, [category]);

  return (
    <div className="menu">
      <h1>Other post you may like</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={post.img} alt="" />
          <h2>{post.title}</h2>
          <button>Read more</button>
        </div>
      ))}
    </div>
  );
};
