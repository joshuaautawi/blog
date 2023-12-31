import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
export const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src="../assets/logo.png" alt="" />
        </div>
        <div className="links">
          <Link className="link" to={'/?cat=art'}>
            <h6>ART</h6>
          </Link>
          <Link className="link" to={'/?cat=science'}>
            <h6>SCIENCE</h6>
          </Link>
          <Link className="link" to={'/?cat=tech'}>
            <h6>TECH</h6>
          </Link>
          <Link className="link" to={'/?cat=cinema'}>
            <h6>CINEMA</h6>
          </Link>
          <Link className="link" to={'/?cat=design'}>
            <h6>DESIGN</h6>
          </Link>
          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}>Logout</span>
          ) : (
            <Link className="link" to={'/login'}>
              {' '}
              Login
            </Link>
          )}

          <span className="write">
            <Link className="link" to={'/write'}>
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};
