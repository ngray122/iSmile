
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'



//??????????? Does the axios call for registeredUser need to be on each component? Not dry code

const PostWall = () => {

    let history = useHistory();

    let [registeredUser, setRegisteredUSer] = useState({});

       // empty array to take in posts from db
       let [allPosts, setAllPosts] = useState([]);



    useEffect(() => {
        axios.get('http://localhost:8000/api/user/getone', { withCredentials: true })
            .then(res => {
                console.log("RESULT on load, GETONE => ", res)
                if (res.data) {
                    setRegisteredUSer(res.data)
                }
            })
            .catch(err => {
                history.push('/')
                console.log("ERR WHEN GETTING LOGGED IN USER", err)
            })

    }, [])



    useEffect(() => {
        axios.get('http://localhost:8000/api/posts/getall')
            .then(res => {
                console.log("RES getting all posts ===> ", res)
                setAllPosts(res.data.results)
            })
            .catch(err => {
                console.log("ERROR GET ALL ==> ", err)
            })
    }, [])










    return (

        <Box>
            <Paper  elevation={3}
            varient='outlined'> 
                <h2>Hello from Post wall</h2>




            </Paper>



        </Box>

    )
};

export default PostWall;
