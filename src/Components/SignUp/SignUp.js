import React, { useState } from "react";
import { auth, createUserProfileDocument } from "../../Firebase/Firebase.utils";

import "./SignUp.css";

const SignUp = () => {
  const [displayName, setDisplayName] = useState("admin");
  const [email, setEmail] = useState("admin@admin.com");
  const [password, setPassword] = useState("admin123");
  const [confirmPassword, setConfirmPassword] = useState("admin123");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      setDisplayName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      console.log(error);
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
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
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
