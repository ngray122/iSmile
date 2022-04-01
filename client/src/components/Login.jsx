import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import style from "./login-reg-component-styles.css";
import NavBar from "./NotRegisterNav";

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
    <>
      <NavBar />
      <div className="container col s6">
        <form className="col s6" onSubmit={login}>
          <div className="row">
            <h3 id="signIn-header">Sign In</h3>
            <div className="input-field col s6">
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
              <p>{formInputError}</p>
            </div>
          </div>
          <div>
            <button
              className="btn waves-effect waves-light center"
              type="submit"
              name="action"
              id="form-button"
            >
              Submit
              <i className="material-icons right">send</i>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
