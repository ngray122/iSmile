import React, { useContext } from "react";
import Grid from "@mui/material/Grid";
import Profile from "./Profile";
import PostWall from "./PostWall";
import RegisteredNavBar from "./RegisteredNavBar";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Dashboard = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      {console.log("matches ->", matches)}
      <RegisteredNavBar />
      <Grid container spacing={1} m={2}>
        {/* {!matches ? <Grid item xs={0} md={4} lg={4} component={Profile} /> : ""} */}
        {/* <Grid item md={1} lg={4} component={Profile} /> */}
        <Grid item md={4}>
          <Profile />
        </Grid>
        <Grid
          item
          md={8}
          display="flex"
          direction="column-reverse"
          alignItems="center"
        >
          <PostWall />
        </Grid>
      </Grid>
    </>
  );
};
export default Dashboard;
