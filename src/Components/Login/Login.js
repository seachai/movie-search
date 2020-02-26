import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../Redux/actions";
import { auth } from "../../Firebase/Firebase.utils";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("test123@test.com");
  const [password, setPassword] = useState("test123");
  const isLoggedIn = useSelector(state => state);
  const dispatch = useDispatch();

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      console.log(auth.currentUser);
      dispatch(auth.currentUser.email);
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="login">
      <div className="login--container">
        <div className="login--modal">
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            ></input>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            ></input>
            <button>Sign In</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
