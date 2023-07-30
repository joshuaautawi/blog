import React, { useContext, useState } from 'react';
import Edit from '../assets/edit.png';
import Delete from '../assets/delete.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu } from '../components/Menu';
import { AuthContext } from '../context/authContext';
import moment from 'moment';
import { useEffect } from 'react';
import axios from 'axios';
export const Single = () => {
  const { currentUser } = useContext(AuthContext);
  const token = currentUser.token;
  const [post, setPost] = useState({});
  const location = useLocation();
  const postId = location.pathname.split('/')[2];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/api/posts/${postId}`);
        setPost(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [postId]);
  const navigate = useNavigate();
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8800/api/posts/${post.id}`);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent;
  };
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <div className="info">
            <span>{post.username}</span>
          </div>
          {currentUser?.username == post.username && (
            <div className="edit">
              <Link to={'/write?edit=2'} state={{ post, token }}>
                <img src={Edit} alt="" />
              </Link>
              <img src={Delete} alt="" onClick={handleDelete} />
            </div>
          )}
        </div>
        <h1> {post.title} </h1>
        <p>{getText(post.desc)}</p>
      </div>
      <Menu category={post.cat}></Menu>
    </div>
  );
};
