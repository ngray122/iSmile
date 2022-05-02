import React from "react";
import RegisteredNavBar from "./RegisteredNavBar";
import Profile from "./Profile";
import Grid from "@mui/material/Grid";

import CreatePost from "./formComponents/CreatePost";

const CreatePostWrapper = () => {
  return (
    <>
      <RegisteredNavBar />
      <Grid container spacing={3} m={1} p={1}>
        <Grid item xs={12} sm={6} md={4}>
          <Profile />
        </Grid>
        <Grid item xs={12} sm={6} md={8}>
          <CreatePost />
        </Grid>
      </Grid>
    </>
  );
};

export default CreatePostWrapper;
