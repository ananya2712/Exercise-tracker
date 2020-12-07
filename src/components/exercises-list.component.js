import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "./navbar.component";
import postApi, { postAPI } from "../url";

const Exercise = (props) => (
  <tr>
    <td>{props.exercise.description}</td>
    <td>{props.exercise.duration}</td>
    <td>{props.exercise.distance}</td>
    <td>{props.exercise.date.substring(0, 10)}</td>
    <td>
      <Link to={"/edit/" + props.exercise._id}>edit</Link> |{" "}
      <a
        href="#"
        onClick={() => {
          props.deleteExercise(props.exercise._id);
        }}
      >
        delete
      </a>
    </td>
  </tr>
);

export default class ExercisesList extends Component {
  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this);

    this.state = { exercises: [] };
  }

  componentDidMount() {
    axios
      .get(postAPI + "/userexercise/")
      .then((response) => {
        this.setState({ exercises: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteExercise(id) {
    axios.delete(postAPI + "/userexercise/" + id).then((response) => {
      console.log(response.data);
    });
    window.alert("Exercise Deleted");
    window.location = "/list/" + this.props.match.params.name;
    this.setState({
      exercises: this.state.exercises.filter((el) => el._id !== id),
    });
  }

  exerciseList() {
    return this.state.exercises.map((currentexercise) => {
      if (currentexercise.username == this.props.match.params.name)
        return (
          <Exercise
            exercise={currentexercise}
            deleteExercise={this.deleteExercise}
            key={currentexercise._id}
          />
        );
    });
  }

  render() {
    return (
      <div>
        <Navbar name={this.props.match.params.name} />
        <div>
          <h3>Logged Exercises</h3>
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th>Description</th>
                <th>Duration</th>
                <th>Distance</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>{this.exerciseList()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
