import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Profile from './Profile';



// When registered user logs into dashboard, nav buttons change to

const Dashboard = () => {

    let history = useHistory();

    let [registeredUser, setRegisteredUSer] = useState({});

    useEffect(() => {
        axios.get('http://localhost:8000/api/user/getone', { withCredentials: true })
            .then(res => {
                console.log("RESULT ON DASH after login , => ", res)
                if (res.data) {
                    setRegisteredUSer(res.data)
                }
            })
            .catch(err => {
                history.push('/')
                console.log("ERR WHEN GETTING LOGGED IN USER", err)
            })

    }, [])



    const logout = () => {
        axios.get('http://localhost:8000/api/user/logout', { withCredentials: true })
            .then(res => {
                history.push('/')
            })
            .catch(err => {
                console.log("ERROR LOGGING OUT => ,", err)
            })
    };


    return (
   
          <Grid
          container
          spacing={1}>
              <Grid item xs={12} sm={6} md={4}>
                  <Paper><Profile></Profile></Paper>
              </Grid>
              <Grid item xs={12} sm={6} md={5}>
                  <Paper>POST  5 col</Paper>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                  <Paper>PINNED  3 col</Paper>
              </Grid>


          </Grid>
           

        
 
      


    
    );
}
    export default Dashboard;
