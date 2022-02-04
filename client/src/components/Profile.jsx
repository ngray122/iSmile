import React from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'







const Profile = () => {

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


    return (
        <Paper elevation={3}>
            <Grid>
            <Avatar
            
            alt="Remy Sharp"
            src="./client/img/duck.png"
            sx={{ width: 75, height: 75 }}
        />
        <Typography
        variant='h6'>

           Welcome {registeredUser.firstName}!
        </Typography>


            </Grid>
      

        </Paper>




    )
}
export default Profile;
