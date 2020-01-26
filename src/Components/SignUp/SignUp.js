import React, { useState } from "react";

import "./SignUp.css";

const SignUp = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <section className="signup">
      <div className="signup--container">
        <div className="signup--modal">
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
