import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/authContext';

export const Login = () => {
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate();
  const [err, setErr] = useState(null);

  const { login } = useContext(AuthContext);
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate('/');
    } catch (err) {
      console.log(err);
      setErr(err.response.data);
    }
  };

  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input type="text" placeholder="username" name="username" onChange={handleChange} />
        <input type="passsword" placeholder="password" name="password" onChange={handleChange} />

        <button onClick={handleSubmit}>Login</button>
        {err && <p>{err}</p>}
        <span>
          Do not you have an account? <Link to={'/register'}>Register</Link>
        </span>
      </form>
    </div>
  );
};
