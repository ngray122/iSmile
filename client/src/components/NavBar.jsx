import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import LoggedInNav from "~~";
import NotLoggedInNav from "~~";

const NavBar = () => {
  // compute if user is logged in or not
  const isLoggedIn = true;

  if (isLoggedIn) {
    return <LoggedInNav />;
  }

  return <NotLoggedInNav />;
};

export default NavBar;

// return (
//   //loggedIn ? loggedInNav() : notLoggedInNav()
//   <Box
//     position="static"
//     fontFamily="Raleway sans-serif"
//     mx="auto"
//     p="10px"
//     bgcolor="primary.dark"
//     width="100"
//     minHeight="75px"
//     display="flex"
//   >
//     <Typography flexGrow="1" variant="h3" mr="20px">
//       {" "}
//       iSmile
//     </Typography>

//     <Button
//       component={Link}
//       to="/signin"
//       variant="text"
//       sx={{ fontSize: "23px" }}
//       disableRipple
//     >
//       Login
//     </Button>

//     <Button
//       component={Link}
//       to="/signin"
//       sx={{ fontSize: "23px", ml: "40px", mr: "20px" }}
//       variant="text"
//       disableRipple
//     >
//       Register
//     </Button>
//   </Box>
// );
