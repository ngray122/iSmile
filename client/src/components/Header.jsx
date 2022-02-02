import React from 'react';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { flexbox } from '@mui/system';
import {
    BrowserRouter,
    Link
} from 'react-router-dom/cjs/react-router-dom.min';
import Paper from '@mui/material/Paper';





const Header = () => {


    return (
        <Box
            position="static"
            fontFamily='Raleway sans-serif'
            mx='auto'
            p='20px'
            bgcolor='primary.dark'
            width='100'
            minHeight='75px'
            display='flex'


        >
            <Typography
                flexGrow='1'
                variant='h3'
                alignLeft
                mr='20px'

            > iSmile
            </Typography>


            <Button
                component={Link} to="/user/login"
                variant="text"
                sx={{ fontSize: "23px" }}
                disableRipple

            >Login
            </Button>

            <Button
                component={Link} to="/user/register"
                sx={{ fontSize: "23px", ml: '70px', mr: '20px' }}
                variant="text"
                disableRipple

            >Register
            </Button>

        </Box>
    );
};


export default Header;

