import React from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid'







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
        <Container>
            <Grid>
            <Avatar
            
            alt="Remy Sharp"
            src="./client/img/duck.png"
            sx={{ width: 75, height: 75 }}
        />
        <Typography
        variant='h4'>

            {registeredUser.firstName}
        </Typography>


            </Grid>
      

        </Container>




    )
}
export default Profile;
