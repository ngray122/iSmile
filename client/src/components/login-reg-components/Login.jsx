import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";

import style from "./login-reg-component-styles.css";

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
    <div className="container col s6">
      <form className="col s6 container" onSubmit={login} id="login-form">
        <div className="row">
          <h4 id="signIn-header">Sign In</h4>
          <div className="input-field col s6">
            <i class="material-icons prefix">email</i>

            <input
              id="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              input="email"
              className="validate"
            />
            <label for="email">Email</label>
            <span className="helper-text" data-error="wrong">
              {formInputError.email?.message}
            </span>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s6">
            <i class="material-icons prefix">account_circle</i>

            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              input="password"
            />
            <label for="password">Password</label>
            <span className="helper-text" data-error="wrong">
              {formInputError.password?.message}
            </span>
            {/* <p>{formInputError}</p> */}
          </div>
        </div>
        <div>
          <Button
            className="btn waves-effect waves-light center"
            type="submit"
            name="action"
            id="form-button"
          >
            {" "}
            Submit
            <i className="material-icons right">send</i>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
