import React from "react";
import RegisteredNavBar from "./RegisteredNavBar";
import Profile from "./Profile";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";

import CreatePost from "./formComponents/CreatePost";
import { useMediaQuery } from "@mui/material";

const CreatePostWrapper = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <RegisteredNavBar />
      <Grid container spacing={3} m={2}>
        {!matches ? (
          <>
            <Grid item md={5}>
              <Profile />
            </Grid>
            <Grid item md={7} display="flex" justifyContent="center">
              <CreatePost />
            </Grid>
          </>
        ) : (
          <Grid
            item
            md={12}
            xs={12}
            sm={12}
            display="flex"
            justifyContent="center"
          >
            <CreatePost />
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default CreatePostWrapper;
