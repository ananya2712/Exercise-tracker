import React from "react";
//import "bootstrap/dist/css/bootstrap.min.css"; //Bootstrap helful for CSS
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import LoginUser from "./components/login-user.js";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="container">
        <Route path="/list/:name" component={ExercisesList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create/:name" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
        <Route path="/" exact component={LoginUser} />
      </div>
    </Router>
  );
}

export default App;
