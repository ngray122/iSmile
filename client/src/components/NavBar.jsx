import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NavBar = () => {
  return (
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
        to="/login"
        variant="text"
        sx={{ fontSize: "23px" }}
        disableRipple
      >
        Login
      </Button>

      <Button
        component={Link}
        to="/register"
        sx={{ fontSize: "23px", ml: "40px", mr: "20px" }}
        variant="text"
        disableRipple
      >
        Register
      </Button>
    </Box>
  );
};

export default NavBar;
