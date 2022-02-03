import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Registration from "./Registration";
import Login from "./Login"
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'





const SignIn = (props) => {
  return (



    <Grid
    p='20px'
    height='100%'
    container
    spacing={1}
    sx={{ bgcolor: 'primary.light' }}>
      <Grid item xs={12} sm={6} md={6}>
      <Registration></Registration>
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
      <Login></Login>
      </Grid>



    </Grid>
  )
};

export default SignIn;

