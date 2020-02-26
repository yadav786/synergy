import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { connect } from "react-redux";
import HOC from "./components/HOC";
import Navigations from "./components/Navigations";
import Home from "./components/Home";
import About from "./components/About";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import LogIn from "./components/LogIn";
import { Users } from "./components/crudComponents/";
import MyMap from "./components/maps/MyMap";
 
const App = () => {
  return (
    <Router>
      <Navigations /> 
      <Switch>
        <Route exact path="/" component={LogIn} />
        <Route exact path="/Home" component={HOC(Home)} />{" "}
        <Route exact path="/about" component={HOC(About)} />{" "}
        <Route exact path="/profile" component={HOC(Profile)} />{" "}
        <Route exact path="/contact" component={HOC(Contact)} />
        <Route exact path="/users" component={HOC(Users)} />
        <Route exact path="/maps" component={HOC(MyMap)} />
        <Redirect to="/" />{" "}
      </Switch>{" "}
    </Router>    
  );
};

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, null)(App);
