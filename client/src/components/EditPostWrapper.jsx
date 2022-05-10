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
      <Grid container spacing={3}>
        {!matches ? (
          <>
            <Grid item md={5}>
              <Profile />
            </Grid>

            <Grid
              item
              marginTop={3}
              md={6}
              display="flex"
              justifyContent="center"
            >
              <EditPost active={true} />
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
            marginTop={3}
          >
            <EditPost active={true} />
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default EditPostWrapper;
