import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.module.css";
import AuthService from "./services/AuthService";
import Login from "./components/Security/login";
import Signup from "./components/Security/signup";
import Homepage from "./components/homepage";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
    this.state = {
      currentUser: undefined,
    };
  }
  componentDidMount() {
    const user = AuthService.getCurrentUser();
    if (user) {
      console.log(user);
      this.setState({
        currentUser: user,
      });
    }
  }
  logOut() {
    AuthService.logout();
  }
  render() {
    const { currentUser } = this.state;
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            YouRL
          </Link>
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>
          </div>
          {currentUser ? (
            <div className="navbar-nav ms-auto">
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/signup"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav>
        <div className="container mt-3">
          <Routes>
            <Route exact path={"/"} element={<Homepage />} />
            <Route exact path={"/home"} element={<Homepage />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </div>
    );
  }
}
export default App;
