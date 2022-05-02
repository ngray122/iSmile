import React from "react";
import RegisteredNavBar from "./RegisteredNavBar";
import Profile from "./Profile";
import Grid from "@mui/material/Grid";

import CreatePost from "./formComponents/CreatePost";

const CreatePostWrapper = () => {
  return (
    <>
      <RegisteredNavBar />
      <Grid container spacing={3} m={2}>
        <Grid item xs={12} sm={12} md={5}>
          <Profile />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={7}
          display="flex"
          justifyContent="center"
        >
          <CreatePost />
        </Grid>
      </Grid>
    </>
  );
};

export default CreatePostWrapper;
