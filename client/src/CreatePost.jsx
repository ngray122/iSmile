
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import FormLabel from '@mui/material/FormLabel';
import { FormGroup, TextField } from "@mui/material";


const CreatePost = () => {
    let history = useHistory();

    let [registeredUser, setRegisteredUSer] = useState({});

    // Users can only access this page while they are logged in 
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

        <Box
            sx={{ bgcolor: 'primary.light' }}>
            <form>
                <Paper
                    align="center"
                    // justifyContent="center"
                    variant="outlined"
                    // elevation=''
                    mx='auto'
                    sx={{ p: '20px' }}
                    border="2"
                    borderColor="black"
                // sx={{bgcolor:'primary.light'}}
                >
                    {/* ********************* Can't change form label font OR Change the backgrounc coloe  */}
                    <FormLabel
                    component='legend'
                    sx={{size:'h3'}}
                    
                    >What made you smile today {registeredUser.firstName}
                </FormLabel>

                <FormControl>




                </FormControl>

                </Paper>
            </form>
        </Box>



    )
};

export default CreatePost;
