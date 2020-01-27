import React, { useState } from "react";
import { auth } from "../../Firebase/Firebase.utils";

import "./SignUp.css";

const SignUp = () => {
  const [user, setUser] = useState("admin");
  const [email, setEmail] = useState("admin@admin.com");
  const [password, setPassword] = useState("admin123");
  const [confirmPassword, setConfirmPassword] = useState("admin123");

  const handleSubmit = (e) => {
    e.preventDefault();
    if ((user, email, password, confirmPassword)) {
      console.log(JSON.stringify({ user, email, password, confirmPassword }));
    }
  };
  return (
    <section className="signup">
      <div className="signup--container">
        <div className="signup--modal">
          <form
            onSubmit={handleSubmit}
            action="https://httpbin.org/post"
            method="POST"
          >
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
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></input>
            <button>Sign Up</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
