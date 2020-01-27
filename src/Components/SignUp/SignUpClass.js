import React, { Component } from "react";
import { auth } from "../../Firebase/Firebase.utils";

import "./SignUp.css";

function setErrorMsg(error) {
  return {
    registerError: error.message
  };
}

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
      wrongUserName: 0,
      wrongEmail: 0,
      wrongPassword: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClickRegisterUser = this.handleClickRegisterUser.bind(this);
  }

  registerSuccessfull() {
    if (
      this.state.wrongEmail === 1 &&
      this.state.wrongUserName === 1 &&
      this.state.wrongPassword === 1
    ) {
      return alert("Register successful");
    }
  }

  wrongEmailMessage() {
    if (this.state.wrongEmail === 2) {
      return alert("Email already taken");
    }
  }

  wrongUserNameMessage() {
    if (this.state.wrongUserName === 2) {
      return alert("userName already taken");
    }
  }

  wrongPasswordMessage() {
    if (this.state.wrongPassword === 2) {
      return alert("Password needs 6 characters");
    }
  }

  handleClickRegisterUser(e) {
    const re = /^(([^<>()\\.,;:\s@"]+(\.[^<>()\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (
      this.state.password.length > 6 &&
      re.test(String(this.state.email).toLowerCase())
    ) {
      localStorage.setItem("password", this.state.password);
      localStorage.setItem("userName", this.state.userName);
      auth(
        this.state.email,
        this.state.password,
        this.state.userName
      ).catch((e) => this.setState(setErrorMsg(e)));
      setTimeout(() => {
        localStorage.removeItem("password");
        localStorage.removeItem("userName");
      }, 1500);
    }
    if (this.state.password.length < 6) {
      alert("Password must have at least 6 characters");
    }
    if (re.test(String(this.state.email).toLowerCase()) === false) {
      alert("wrong email address");
    }
  }

  handleChange(e) {
    const name = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    this.setState({
      [name]: value
    });
  }

  render() {
    const { userName, email, password, confirmPassword } = this.state;
    return (
      <section className="signup">
        <div className="signup--container">
          <div className="signup--modal">
            <form action="https://httpbin.org/post" method="POST">
              <input
                type="name"
                name="userName"
                placeholder="Username"
                value={userName}
                onChange={this.handleChange}
              ></input>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={this.handleChange}
              ></input>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={this.handleChange}
              ></input>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={this.handleChange}
              ></input>
              <button onClick={this.handleClickRegisterUser}>Sign Up</button>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default SignUp;
