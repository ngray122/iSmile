import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Profile from "./Profile";
import PostWall from "./PostWall";
import { UserContext } from "./UserContext";
import RegisteredNavBar from "./RegisteredNavBar";
import { Redirect } from "react-router-dom";

const Dashboard = () => {
  const registeredUser = useContext(UserContext);
  console.log("registeredUser inside Dashboard component->", registeredUser);

  return (
    <>
      <RegisteredNavBar />

      <Grid container spacing={3} m={1} p={1}>
        <Grid item xs={12} sm={6} md={4}>
          <Profile></Profile>
        </Grid>
        <Grid item xs={12} sm={6} md={8}>
          <PostWall />
        </Grid>
      </Grid>
    </>
  );

  <Redirect to="/" />;
};
export default Dashboard;
