import React, { Component } from "react";
import axios from "axios";
import NavbarSub from "./navbarsub";
import postApi, { postAPI } from "../url";

export default class LoginUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      password: "",
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
      password: this.state.password,
    };

    axios.post(postAPI + "/userinfo/login", user).then((res) => {
      if (res.data != "fail") {
        console.log(res.data);
        window.location = "/create/" + res.data.username;
      } else {
        window.alert("incorrect username or password");
        window.location = "/";
      }
    });

    this.setState({
      username: "",
      password: "",
    });
  }

  render() {
    return (
      <div>
        <NavbarSub />
        <br />

        <div className="container">
          <h2>Login</h2>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Username: </label>
              <input
                type="text"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}
              />
            </div>
            <div className="form-group">
              <label>Password: </label>
              <input
                type="password"
                required
                className="form-control"
                value={this.state.password}
                onChange={this.onChangePassword}
              />
            </div>
            <div className="form-group">
              <input type="submit" value="Login" className="btn btn-primary" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
