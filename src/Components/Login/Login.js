import React from "react";
import Firebase from "firebase-app";
import "./Login.css";

const Login = () => {
  return (
    <section className="login">
      <div className="login-container">
        <div className="login-modal">
          <form>
            <input type="name" name="username" placeholder="Username"></input>
            <input type="email" name="email" placeholder="Email"></input>
            <input
              type="password"
              name="password"
              placeholder="Password"
            ></input>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
