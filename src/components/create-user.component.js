import React, { Component } from "react";
import axios from "axios";
import NavbarSub from "./navbarsub";
import postApi, { postAPI } from "../url";
export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      email: "",
      password: "",
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.state.password.length < 8) {
      window.alert("password length is less than 8");
      window.location = "/user";
    }
    const user = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    };

    axios.post(postAPI + "/userinfo/register", user).then((res) => {
      if (res.data != "fail" && res.data != "error") {
        window.alert("user added");
        window.location = "/";
      } else {
        window.alert("user exists");
        window.location = "/user";
      }
    });

    this.setState({
      username: "",
      email: "",
      password: "",
    });
  }

  render() {
    return (
      <div>
        <NavbarSub />
        <br />
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username: </label>
            <input
              type="text"
              required
              placeholder="person123"
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
          </div>
          <div className="form-group">
            <label>Email: </label>
            <input
              type="email"
              required
              placeholder="sample@email.com"
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
          </div>
          <div className="form-group">
            <label>Password: </label>
            <input
              type="password"
              required
              placeholder="minimum 8 characters"
              className="form-control"
              value={this.state.password}
              onChange={this.onChangePassword}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create User"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
