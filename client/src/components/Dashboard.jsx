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

      <Grid container spacing={1} m={2}>
        <Grid item xs={12} sm={12} md={5}>
          <Profile></Profile>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={7}
          sx={{
            display: "flex",
            flexDirection: "column-reverse",
            alignItems: "center",
          }}
        >
          <PostWall />
        </Grid>
      </Grid>
    </>
  );
};
export default Dashboard;
