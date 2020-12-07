import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import Navbar from "./navbar.component";
import "react-datepicker/dist/react-datepicker.css";
import postApi, { postAPI } from "../url";

export default class CreateExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDistance = this.onChangeDistance.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      description: "",
      distance: 0,
      duration: 0,
      date: new Date(),
    };
  }

  componentDidMount() {
    this.setState({
      username: this.props.match.params.name,
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  onChangeDistance(e) {
    this.setState({
      distance: e.target.value,
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
      distance: this.state.distance,
      duration: this.state.duration,
      date: this.state.date,
    };

    axios.post(postAPI + "/userexercise/addexercise", exercise).then((res) => {
      window.alert("Exercise added!");
      console.log(res.data);
    });

    this.setState({
      description: "",
      distance: 0,
      duration: 0,
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <Navbar name={this.props.match.params.name} />
        <h3>Create New Exercise Log</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Exercise Description: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>

          <div className="form-group">
            <label>Distance (in kilometres): </label>
            <input
              type="text"
              className="form-control"
              value={this.state.distance}
              onChange={this.onChangeDistance}
            />
          </div>

          <div className="form-group">
            <label>Duration (in mins): </label>
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
              value="Create Exercise Log"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
