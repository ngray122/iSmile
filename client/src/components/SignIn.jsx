import React from "react";
import Registration from "./Registration";
import Login from "./Login";
import Grid from "@mui/material/Grid";

const SignIn = (props) => {
  return (
    <Grid
      p="20px"
      height="100%"
      container
      spacing={1}
      sx={{ bgcolor: "primary.light" }}
    >
      <Grid item xs={12} sm={6} md={6}>
        <Registration></Registration>
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <Login></Login>
      </Grid>
    </Grid>
  );
};

export default SignIn;
