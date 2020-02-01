import React, { useState } from "react";
import { withRouter } from "react-router";
import { auth, createUserProfileDocument } from "../../Firebase/Firebase.utils";

import "./SignUp.css";

const SignUp = ({ props }) => {
  const [displayName, setDisplayName] = useState("admin");
  const [email, setEmail] = useState("admin@admin.com");
  const [password, setPassword] = useState("admin123");
  const [confirmPassword, setConfirmPassword] = useState("admin123");

  const resetForm = () => {
    setDisplayName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const { userAuth } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(userAuth, { displayName });
      auth.onAuthStateChanged((user) => {
        if (user) {
          console.log({ displayName }, props); //Set this into the state, then redirect to main
        } else {
          console.log("No one is signed in");
        }
      });
      resetForm();
    } catch (error) {
      alert(error);
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

export default withRouter(SignUp);
