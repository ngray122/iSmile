import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import FormLabel from "@mui/material/FormLabel";
import { FormGroup, TextField } from "@mui/material";

const User = (props) => {
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
          setFormInputError(res.data.errors);
        } else {
          history.push("/dashboard");
        }
      })
      .catch((err) => console.log("error in submitting post request", err));
  };

  return (
    <div className="container col s6">
      <form autoComplete="off" className="col s6" onSubmit={register}>
        <div className="row">
          <h3 component="h3">Register</h3>

          <div className="input-field col s6">
            <input
              id="first-name-form"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              required
            />
            <label for="first-name-form">First Name</label>
            <span className="helper-text" data-error="wrong">
              {formInputError.firstName?.message}
            </span>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input
              type="text"
              id="last-name-form"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            <label for="last-name-form">Last Name</label>
            <span className="helper-text" data-error="wrong">
              {formInputError.lastName?.message}
            </span>
          </div>
        </div>
        <div>
          <FormGroup row={false} sx={{ p: "5px" }}>
            <TextField
              variant="standard"
              // type='email'
              id="component-outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="Email"
              input="email"
              // required
              errorText={formInputError.email?.message}
            />
          </FormGroup>
        </div>

        <div>
          <FormGroup row={false} sx={{ p: "5px" }}>
            <TextField
              variant="standard"
              type="password"
              id="component-outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label="Password"
              input="password"
              // required
              errorText={formInputError.password?.message}
            />
            {/* <p>{formInputError}</p> */}
          </FormGroup>
        </div>

        <div>
          <FormGroup row={false} sx={{ p: "5px" }}>
            <TextField
              variant="standard"
              type="password"
              id="component-outlined"
              value={verifyPassword}
              onChange={(e) => setVerifyPassword(e.target.value)}
              label="Verify Password"
              input="password"
              // required
              errorText={formInputError.password?.message}
            />
            {/* <p>{formInputError}</p> */}
          </FormGroup>
        </div>

        <div>
          <Button type="submit" variant="contained">
            Register
          </Button>
        </div>
      </form>
    </div>
    // REGISTRATION FORM
  );
};

export default User;
