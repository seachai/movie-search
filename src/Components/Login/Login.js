import React, { useState } from "react";
import firebase from "../../Firebase/Firebase.utils";
import "./Login.css";
import { registerVersion } from "firebase";

const Login = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <section className="login">
      <div className="login-container">
        <div className="login-modal">
          <form>
            <input
              type="name"
              name="username"
              placeholder="Username"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            ></input>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <button>Sign Up</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
