import React, { useContext } from "react";
import Grid from "@mui/material/Grid";
import Profile from "./Profile";
import PostWall from "./PostWall";
import RegisteredNavBar from "./RegisteredNavBar";

const Dashboard = () => {
  // const { registeredUser } = useContext(AuthContext);
  // console.log("logged in user -> ", registeredUser);
  return (
    <>
      <RegisteredNavBar />

      <Grid container spacing={1} m={2}>
        <Grid item md={4}>
          <Profile></Profile>
        </Grid>
        <Grid
          item
          xs={12}
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
