import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Profile from "./Profile";
import PostWall from "./PostWall";

// ???????????????????????As User navigates to different component views, the buttons should change to fit content.  A New Nav Component seems to violate dry code

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
      <Grid item xs={12} sm={6} md={6}>
        <Paper>
          {" "}
          <PostWall />
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={2}>
        <Paper>PINNED 3 col</Paper>
      </Grid>
    </Grid>
  );
};
export default Dashboard;
