import axios from "axios";
const API_URL = "http://localhost:8081/api/auth/";
class AuthService {
    login(username, password) {
      return axios
        .post(API_URL + "login", {
          username,
          password
        }, {headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          }})
        .then(response => {
          if (response.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data));
          }
          return response.data;
        });
    }
    logout() {
      localStorage.removeItem("user");
    }
    register(username, email, password) {
      return axios.post(API_URL + "signup", {
        username,
        email,
        password
      }, {headers:{
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      }});
    }
    getCurrentUser() {
      return JSON.parse(localStorage.getItem('user'));;
    }
  }
  export default new AuthService();