import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import { FormGroup, TextField } from "@mui/material";

const Login = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let [formInputError, setFormInputError] = useState("");

  const history = useHistory();

  const login = (e) => {
    e.preventDefault();
    // info taken in from form
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
    <form autoComplete="off" onSubmit={login}>
      <Container
        align="center"
        // justifyContent="center"
        variant="outlined"
        // elevation=''
        mx="auto"
        sx={{ p: "10px" }}
      >
        <FormLabel component="legend">Sign In</FormLabel>

        <FormControl>
          <FormGroup row={false} sx={{ p: "2px" }}>
            <input
              variant="standard"
              // type='email'
              id="standard-basic"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="Email"
              input="email"
              // required
              errorText={formInputError.email?.message}
            />
          </FormGroup>
          <FormGroup row={false} sx={{ p: "2px" }}>
            <input
              variant="standard"
              type="password"
              id="standard-basic"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label="Password"
              input="password"
              // required
              errorText={formInputError.password?.message}
            />
            <p>{formInputError}</p>
          </FormGroup>
          <Button type="submit" variant="contained">
            Login
          </Button>
        </FormControl>
      </Container>
    </form>
  );
};

export default Login;
