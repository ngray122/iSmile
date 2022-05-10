import React from "react";
import Grid from "@mui/material/Grid";
import Profile from "./Profile";
import PostWall from "./PostWall";
import RegisteredNavBar from "./RegisteredNavBar";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Dashboard = () => {
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
              md={6}
              display="flex"
              direction="column-reverse"
              alignItems="center"
            >
              <PostWall />
            </Grid>
          </>
        ) : (
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            display="flex"
            direction="column-reverse"
            alignItems="center"
          >
            <PostWall />
          </Grid>
        )}
      </Grid>
    </>
  );
};
export default Dashboard;
