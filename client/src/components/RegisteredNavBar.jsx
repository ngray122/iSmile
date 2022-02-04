import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { flexbox } from '@mui/system';
import axios from 'axios';
import {
    BrowserRouter,
    Link
} from 'react-router-dom/cjs/react-router-dom.min';
import { useHistory } from "react-router-dom";




// Change hover properties for buttons.  Is currently blue on hover



const RegisteredNavBar = () => {
    const history = useHistory();

    //state boolean for logged in user

    //make the call for logged in user
    //if they are set to true if not false

    //make function that renders logged in nav
    // loggedInNav () => {
    //     returns(
    //         navbar
    //     )
    // }
    //make function that renders not logged in nav

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
        //loggedIn ? loggedInNav() : notLoggedInNav()
        <Box
            position="static"
            fontFamily='Raleway sans-serif'
            mx='auto'
            p='10px'
            bgcolor='primary.dark'
            width='100'
            minHeight='75px'
            display='flex'
        >
            <Typography
                flexGrow='1'
                variant='h3'
                mr='20px'

            > iSmile
            </Typography>


            <Button
                component={Link} to="/posts/create"
                variant="text"
                sx={{ fontSize: "23px" }}
                disableRipple

            >Post
            </Button>

            <Button
                onClick={logout}
                sx={{ fontSize: "23px", ml: '40px', mr: '20px' }}
                variant="text"
                disableRipple

            >Logout
            </Button>
        </Box>
            );
};


            export default RegisteredNavBar;

