import React, { useContext } from "react";
import Grid from "@mui/material/Grid";
import Profile from "./Profile";
import PostWall from "./PostWall";
import { AuthContext } from "./AuthContext";
import RegisteredNavBar from "./RegisteredNavBar";

const Dashboard = () => {
  const { registeredUser } = useContext(AuthContext);
  console.log("logged in user -> ", registeredUser);
  return (
    <>
      <RegisteredNavBar />

      <Grid container spacing={3} m={1} p={1}>
        <Grid item xs={12} sm={6} md={4}>
          <Profile></Profile>
        </Grid>
        <Grid item xs={12} sm={6} md={8}>
          <PostWall />
        </Grid>
      </Grid>
    </>
  );
};
export default Dashboard;
