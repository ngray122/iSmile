import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import "./login-reg-component-styles.css";
import { HeroImg } from "./HeroImg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Login = () => {
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
        if (res.data.error) {
          setFormInputError(res.data.error);
        } else {
          history.push("/dashboard");
        }
      })
      .catch((err) => console.log("ERROR WHEN LOGGING IN ===> ", err));
  };

  return (
    <div className="container">
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
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  input="email"
                  className="login-form-input"
                  required
                />
                <label for="email">Email</label>
                <span
                  className="helper-text"
                  data-error="Please enter a valid email"
                >
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
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  input="password"
                  required
                />
                <label for="password">Password</label>
                <span
                  className="helper-text"
                  data-error="Please enter your password"
                >
                  {formInputError.password?.message}
                </span>
                {/* <p>{formInputError}</p> */}
              </div>
            </div>
            <div>
              <Button
                className="large btn waves-effect waves-light center "
                type="submit"
                name="action"
                id="form-button"
              >
                {" "}
                Login
                <i className="material-icons right">send</i>
              </Button>
              <h4>Don't have an account yet?</h4>
              <Link
                to="/register"
                className="large btn waves-effect waves-light center "
                name="action"
                id="form-button"
              >
                Click here to Register
              </Link>
            </div>
          </form>
        </div>

        <div className="container col s12">
          <HeroImg />
        </div>
      </div>
    </div>
  );
};

export default Login;
