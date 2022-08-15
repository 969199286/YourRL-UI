import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.module.css";
import AuthService from "./services/AuthService";
import Login from "./components/Security/login";
import Signup from "./components/Security/signup";
import Homepage from "./components/homepage";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "@mui/material/Button";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
    this.googleLogin = this.googleLogin.bind(this);
    this.state = {
      currentUser: undefined,
      isGoogle: false,
    };
  }
  componentDidMount() {
    const user = AuthService.getCurrentUser();
    const oauthUser = AuthService.getOAuthUser();
    if (user) {
      console.log(user);
      this.setState((state) => ({
        currentUser: user,
        isGoogle: state.isGoogle,
      }));
    }
    if (oauthUser) {
      this.setState((state) => ({
        currentUser: state.currentUser,
        isGoogle: true,
      }));
    }
  }

  logOut() {
    AuthService.logout();
  }

  googleLogin() {
    window.location.href =
      "http://localhost:8081/oauth2/authorize/google?redirect_uri=http://localhost:3000/";
    localStorage.setItem("google", "try google");
  }
  render() {
    const { currentUser, isGoogle } = this.state;
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link style={{marginLeft:"10px"}} to={"/"} className="navbar-brand">
            YouRL
          </Link>
          <div className="navbar-nav self-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>
          </div>
          {currentUser || isGoogle === true ? (
            <div className="navbar-nav ms-auto">
              <li className="nav-item">
                <a href="http://localhost:8081/api/auth/logout" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ms-auto">
              <li className="nav-item">
                <Button style={{ marginRight:"15px", marginTop:"2px",}} variant="contained" onClick={this.googleLogin}>
                  Login through Google
                </Button>
              </li>
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
