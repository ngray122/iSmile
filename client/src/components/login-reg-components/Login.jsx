import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../AuthContext";
import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import { HeroImg } from "./HeroImg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styles from "../../static/css/style.css";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Login = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  let { setRegisteredUser, registeredUser } = useContext(AuthContext);
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [formInputError, setFormInputError] = useState("");

  const history = useHistory();
  const login = (e) => {
    e.preventDefault();
    let formInputObj = { email, password };
    axios
      .post("http://localhost:8000/api/user/login", formInputObj, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.errors) {
          setFormInputError(res.data.errors);
        } else {
          setRegisteredUser(res.data.result);
          history.push("/dashboard");
        }
      })
      .catch((err) => console.log("ERROR WHEN LOGGING IN ===> ", err));
  };
  return (
    <div className="container">
      {!matches ? (
        <div className="row container">
          <div className="container col s12">
            <form
              className="container"
              autoComplete="off"
              onSubmit={login}
              id="login-form"
            >
              <div className="row">
                <h4 id="signIn-header">Sign In</h4>
                <div className="input-field col s6">
                  <i className="material-icons prefix">email</i>

                  <input
                    id="email"
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                    input="email"
                    className="login-form-input"
                    value={email}
                  />
                  <label htmlFor="email">Email</label>
                  <span className="helper-text" data-error="wrong">
                    {formInputError.email?.message}
                  </span>
                </div>
              </div>

              <div className="row">
                <div className="input-field col s6">
                  <i className="material-icons prefix">account_circle</i>

                  <input
                    className="login-form-input"
                    type="password"
                    id="password-login-form"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    input="password"
                  />
                  <label htmlFor="password">Password</label>
                  <span className="helper-text" data-error="wrong">
                    {formInputError.password?.message}
                  </span>
                </div>
              </div>
              <div className="signin-btn-wrapper">
                <Button
                  className=" large waves-effect waves-light center"
                  type="submit"
                  name="action"
                  id="login-button"
                >
                  {" "}
                  Login
                  <i className="material-icons right">send</i>
                </Button>

                <Link
                  to="/register"
                  className="large btn waves-light center form-button"
                  name="action"
                >
                  Click here to Register
                </Link>
              </div>
            </form>
          </div>

          <div className="container col s6">
            <HeroImg />
          </div>
        </div>
      ) : (
        <div className="container col s12">
          <form
            className="container"
            autoComplete="off"
            onSubmit={login}
            id="login-form"
          >
            <div className="row">
              <h4 id="signIn-header">Sign In</h4>
              <div className="input-field col s6">
                <i className="material-icons prefix">email</i>

                <input
                  id="email"
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                  input="email"
                  className="login-form-input"
                  value={email}
                />
                <label htmlFor="email">Email</label>
                <span className="helper-text" data-error="wrong">
                  {formInputError.email?.message}
                </span>
              </div>
            </div>

            <div className="row">
              <div className="input-field col s6">
                <i className="material-icons prefix">account_circle</i>

                <input
                  className="login-form-input"
                  type="password"
                  id="password-login-form"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  input="password"
                />
                <label htmlFor="password">Password</label>
                <span className="helper-text" data-error="wrong">
                  {formInputError.password?.message}
                </span>
              </div>
            </div>
            <div className="row container" id="login-reg-button-wrapper">
              <Button
                className="large waves-effect waves-light center"
                type="submit"
                name="action"
                id="login-button"
              >
                {" "}
                Login
                <i className="material-icons right">send</i>
              </Button>
              <Link
                to="/register"
                className="large btn waves-effect waves-light center form-button"
                name="action"
              >
                Click here to Register
              </Link>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
