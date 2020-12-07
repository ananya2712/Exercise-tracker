import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import Navbar from "./navbar.component";
import postApi, { postAPI } from "../url";

import "react-datepicker/dist/react-datepicker.css";

export default class EditExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangeDistance = this.onChangeDistance.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      distance: 0,
      description: "",
      duration: 0,
      date: new Date(),
    };
  }

  componentDidMount() {
    axios
      .get(postAPI + "/userexercise/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          username: response.data.username,
          distance: response.data.distance,
          description: response.data.description,
          duration: response.data.duration,
          date: new Date(response.data.date),
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onChangeDistance(e) {
    this.setState({
      distance: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  onChangeDuration(e) {
    this.setState({
      duration: e.target.value,
    });
  }

  onChangeDate(date) {
    this.setState({
      date: date,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      distance: this.state.distance,
      date: this.state.date,
    };

    console.log(exercise);

    axios
      .post(
        postAPI + "/userexercise/update/" + this.props.match.params.id,
        exercise
      )
      .then((res) => console.log(res.data));
    window.alert("Exercise edited");
    window.location = "/list/" + this.state.username;
  }

  render() {
    return (
      <div>
        <Navbar name={this.state.username} />
        <br />
        <h3>Edit Exercise Log</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Description: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>
          <div className="form-group">
            <label>Distance: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.distance}
              onChange={this.onChangeDistance}
            />
          </div>
          <div className="form-group">
            <label>Duration (in minutes): </label>
            <input
              type="text"
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeDuration}
            />
          </div>
          <div className="form-group">
            <label>Date: </label>
            <div>
              <DatePicker
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Edit Exercise Log"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
