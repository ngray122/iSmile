import React from "react";
import EditPost from "./formComponents/EditPost";
import Profile from "./Profile";
import RegisteredNavBar from "./RegisteredNavBar";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

const EditPostWrapper = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <RegisteredNavBar />
      <Grid container spacing={3} m={2}>
        {!matches ? (
          <Grid item md={4}>
            <Profile />
          </Grid>
        ) : (
          ""
        )}

        <Grid item md={8} display="flex" justifyContent="center">
          <EditPost active={true} />
        </Grid>
      </Grid>
    </>
  );
};

export default EditPostWrapper;
