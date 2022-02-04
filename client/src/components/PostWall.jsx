
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'


//??????????? Does the axios call for registeredUser need to be on each component? Not dry

const PostWall = () => {


    useEffect(() => {
        axios.get('http://localhost:8000/api/user/getone', { withCredentials: true })
            .then(res => {
                console.log("RESULT on load, CREATE POST => ", res)
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



  )
};

export default PostWall;
