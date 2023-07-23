import React from "react";
import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input type="text" placeholder="username" />
        <input type="email" placeholder="email" />
        <input type="passsword" placeholder="password" />

        <button>Login</button>
        <p>Error !</p>
        <span>
          Don you have an account? <Link to={"/login"}>Register</Link>
        </span>
      </form>
    </div>
  );
};
