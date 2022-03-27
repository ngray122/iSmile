import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Profile from "./Profile";
import PostWall from "./PostWall";

const Dashboard = () => {
  let history = useHistory();

  let [registeredUser, setRegisteredUSer] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/user/getone", { withCredentials: true })
      .then((res) => {
        // console.log("RESULT ON DASH after login , => ", res);
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
    <Grid container spacing={3} mt={1}>
      <Grid item xs={12} sm={6} md={4}>
        <Profile></Profile>
      </Grid>
      <Grid item xs={12} sm={6} md={5.5}>
        <PostWall sx={{ backgroundColor: "#fff1ff", minHeight: "100%" }} />
      </Grid>
      <Grid item xs={12} sm={6} md={2.5}>
        <Paper>PINNED 3 col</Paper>
      </Grid>
    </Grid>
  );
};
export default Dashboard;
