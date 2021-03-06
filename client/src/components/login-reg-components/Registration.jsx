import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import { HeroImg } from "./HeroImg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styles from "../../static/css/style.css";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const User = (props) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  let [formInputError, setFormInputError] = useState({});

  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [verifyPassword, setVerifyPassword] = useState("");

  const history = useHistory();

  // CREATE NEW USER
  const register = (e) => {
    e.preventDefault();
    let formInputObj = { firstName, lastName, email, password, verifyPassword };
    axios
      .post("http://localhost:8000/api/user/register", formInputObj, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.errors) {
          console.log(res.data.errors);
          setFormInputError(res.data.errors);
        } else {
          history.push("/dashboard");
        }
      })
      .catch((err) => console.log("error in submitting post request", err));
  };

  return (
    <div className="container">
      {!matches ? (
        <div className="row container">
          <div className="container col s12">
            <form
              className="container"
              onSubmit={register}
              id="registration-form"
            >
              <div className="row">
                <h4 id="registration-header">Register</h4>

                <div className="input-field col s6">
                  <i className="material-icons prefix">account_circle</i>
                  <input
                    id="first-name-form"
                    className="reg-form-input"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    type="text"
                  />
                  <label htmlFor="first-name-form">First Name</label>

                  <span className="helper-text" id="helper-text">
                    {formInputError.firstName?.message}
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s6">
                  <i className="material-icons prefix">account_circle</i>

                  <input
                    className="reg-form-input"
                    type="text"
                    id="last-name-form"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  <label htmlFor="last-name-form">Last Name</label>
                  <span className="helper-text" id="helper-text">
                    {formInputError.lastName?.message}
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s6">
                  <i className="material-icons prefix">email</i>

                  <input
                    className="reg-form-input"
                    type="text"
                    id="email-reg-form"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label htmlFor="email-reg-form">Email</label>
                  <span className="helper-text" id="helper-text">
                    {formInputError.email?.message}
                  </span>
                </div>
              </div>

              <div className="row">
                <div className="input-field col s6">
                  <i className="material-icons prefix">lock</i>

                  <input
                    className="reg-form-input"
                    type="password"
                    id="password-reg-form"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    input="password"
                  />
                  <label htmlFor="password-reg-form">Password</label>
                  <span className="helper-text" id="helper-text">
                    {formInputError.password?.message}
                  </span>
                </div>
              </div>

              <div className="row">
                <div className="input-field col s6">
                  <i className="material-icons prefix">lock</i>

                  <input
                    type="password"
                    className="reg-form-input"
                    id="confirm-password-reg-form"
                    value={verifyPassword}
                    onChange={(e) => setVerifyPassword(e.target.value)}
                    input="password"
                  />
                  <label htmlFor="confirm-password-reg-form">
                    Confirm Password
                  </label>
                  <span className="helper-text" id="helper-text">
                    {formInputError.password?.message}
                  </span>
                </div>
              </div>

              <div className="signin-btn-wrapper">
                <Button
                  className="large waves-effect waves-light center"
                  type="submit"
                  name="action"
                  id="login-button"
                >
                  Register <i className="material-icons right">send</i>
                </Button>

                <Link
                  to="/login"
                  className="large btn waves-effect waves-light center form-button"
                  name="action"
                >
                  Click here to Login
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
            onSubmit={register}
            id="registration-form"
          >
            <div className="row">
              <h4 id="registration-header-resp">Register</h4>

              <div className="input-field col s6">
                <i className="material-icons prefix">account_circle</i>
                <input
                  id="first-name-form"
                  className="reg-form-input"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                />
                <label htmlFor="first-name-form">First Name</label>
                <span className="helper-text" id="helper-text">
                  {formInputError.firstName?.message}
                </span>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <i className="material-icons prefix">account_circle</i>

                <input
                  className="reg-form-input"
                  type="text"
                  id="last-name-form"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <label htmlFor="last-name-form">Last Name</label>
                <span className="helper-text" id="helper-text">
                  {formInputError.lastName?.message}
                </span>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <i className="material-icons prefix">email</i>

                <input
                  className="reg-form-input"
                  type="text"
                  id="email-reg-form"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="email-reg-form">Email</label>
                <span className="helper-text" id="helper-text">
                  {formInputError.email?.message}
                </span>
              </div>
            </div>

            <div className="row">
              <div className="input-field col s6">
                <i className="material-icons prefix">lock</i>

                <input
                  className="reg-form-input"
                  type="password"
                  id="password-reg-form"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  input="password"
                />
                <label htmlFor="password-reg-form">Password</label>
                <span className="helper-text" id="helper-text">
                  {formInputError.password?.message}
                </span>
              </div>
            </div>

            <div className="row">
              <div className="input-field col s6">
                <i className="material-icons prefix">lock</i>

                <input
                  type="password"
                  className="reg-form-input"
                  id="confirm-password-reg-form"
                  value={verifyPassword}
                  onChange={(e) => setVerifyPassword(e.target.value)}
                  input="password"
                />
                <label htmlFor="confirm-password-reg-form">
                  Confirm Password
                </label>
                <span className="helper-text" id="helper-text">
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
                Register <i className="material-icons right">send</i>
              </Button>

              <Link
                to="/login"
                className="large btn waves-effect waves-light center form-button"
                name="action"
              >
                Login
              </Link>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default User;
