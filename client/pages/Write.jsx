import axios from 'axios';
import moment from 'moment';
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useLocation, useNavigate } from 'react-router-dom';
export const Write = () => {
  const state = useLocation().state;
  const { post, token } = state;
  const [value, setValue] = useState(post?.desc || '');
  const [title, setTitle] = useState(post?.title || '');
  const [file, setFile] = useState('');
  const [category, setCategory] = useState(post?.cat || '');

  const navigate = useNavigate();

  const handleTitle = (e) => setTitle(e.target.value);
  const handleFile = (e) => setFile(e.target.files[0]);
  const handleCategory = (e) => setCategory(e.target.value);
  const handleClick = async (e) => {
    e.preventDefault();
    const imgUrl = await upload();

    const input = {
      title,
      desc: value,
      cat: category,
      img: file ? imgUrl : '',
      date: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'),
      token,
    };
    try {
      post
        ? await axios.put(`http://localhost:8800/api/posts/${post.id}`, input)
        : await axios.post(`http://localhost:8800/api/posts`, input);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      await axios.post('http://localhost:8800/api/upload', formData);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="add">
      <div className="content">
        <input type="text" placeholder="Title" value={title} onChange={handleTitle} />
        <div className="editorContainer">
          <ReactQuill className="editor" theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <input type="file" id="file" name="" onChange={handleFile} />
          <label className="file" htmlFor="file">
            Upload Image
          </label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button onClick={handleClick}>Update</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <input
              type="radio"
              checked={category === 'art'}
              name="cat"
              value="art"
              id="art"
              onChange={handleCategory}
            />
            <label htmlFor="art">Art</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={category === 'science'}
              name="cat"
              value="science"
              id="science"
              onChange={handleCategory}
            />
            <label htmlFor="science">Science</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={category === 'tech'}
              name="cat"
              value="tech"
              id="tech"
              onChange={handleCategory}
            />
            <label htmlFor="tech">Tech</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              name="cat"
              checked={category === 'cinema'}
              value="cinema"
              id="cinema"
              onChange={handleCategory}
            />
            <label htmlFor="cinema">Cinema</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              name="cat"
              checked={category === 'design'}
              value="design"
              id="design"
              onChange={handleCategory}
            />
            <label htmlFor="design">Design</label>
          </div>
        </div>
      </div>
    </div>
  );
};
