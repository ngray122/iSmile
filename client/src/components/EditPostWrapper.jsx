import React from "react";
import EditPost from "./formComponents/EditPost";
import Profile from "./Profile";
import RegisteredNavBar from "./RegisteredNavBar";
import Grid from "@mui/material/Grid";

const EditPostWrapper = () => {
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
          <EditPost active={true} />
        </Grid>
      </Grid>
    </>
  );
};

export default EditPostWrapper;
