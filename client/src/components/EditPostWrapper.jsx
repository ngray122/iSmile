import React from "react";
import EditPost from "./formComponents/EditPost";
import Profile from "./Profile";
import RegisteredNavBar from "./RegisteredNavBar";
import Grid from "@mui/material/Grid";

const EditPostWrapper = () => {
  return (
    <>
      <RegisteredNavBar />
      <Grid container spacing={3} m={2} p={1}>
        <Grid item xs={0} sm={6} md={4}>
          <Profile></Profile>
        </Grid>
        <Grid item xs={12} sm={6} md={8}>
          <EditPost active={true} />
        </Grid>
      </Grid>
    </>
  );
};

export default EditPostWrapper;
