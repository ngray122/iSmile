import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Profile from "./Profile";
import PostWall from "./PostWall";

const Dashboard = () => {
  let history = useHistory();

  let [registeredUser, setRegisteredUSer] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/user/getone", { withCredentials: true })
      .then((res) => {
        console.log("RESULT ON DASH after login , => ", res);
        if (res.data) {
          setRegisteredUSer(res.data);
        }
      })
      .catch((err) => {
        history.push("/");
        console.log("ERR WHEN GETTING LOGGED IN USER", err);
      });
  }, []);

  return (
    <Box container>
      <Grid
        container
        // bgcolor='primary.light'
        spacing={3}
      >
        <Grid item xs={12} sm={6} md={4}>
          <Paper>
            <Profile></Profile>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={5.5}>
          <Paper>
            {" "}
            <PostWall />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={2.5}>
          <Paper>PINNED 3 col</Paper>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Dashboard;
