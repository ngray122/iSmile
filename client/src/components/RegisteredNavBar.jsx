import React, { useState, useContext } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import axios from "axios";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom";
import { UserContext } from "./UserContext";

const RegisteredNavBar = () => {
  // let [registeredUser, setRegisteredUser] = useState(null);
  const history = useHistory();
  const logout = () => {
    axios
      .get("http://localhost:8000/api/user/logout", { withCredentials: true })
      .then((res) => {
        // setRegisteredUser("");
        history.push("/");
      })
      .catch((err) => {
        console.log("ERROR LOGGING OUT => ,", err);
      });
  };

  return (
    //loggedIn ? loggedInNav() : notLoggedInNav()
    <Box
      position="static"
      fontFamily="Raleway sans-serif"
      mx="auto"
      p="10px"
      bgcolor="primary.dark"
      width="100"
      minHeight="75px"
      display="flex"
    >
      <Typography flexGrow="1" variant="h3" mr="20px">
        {" "}
        iSmile
      </Typography>

      <Button
        component={Link}
        to="/posts/create"
        variant="text"
        sx={{ fontSize: "23px" }}
        disableRipple
      >
        Post
      </Button>

      <Button
        onClick={logout}
        sx={{ fontSize: "23px", ml: "40px", mr: "20px" }}
        variant="text"
        disableRipple
      >
        Logout
      </Button>
    </Box>
  );
};

export default RegisteredNavBar;
