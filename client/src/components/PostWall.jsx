
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'




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
                setAllPosts(res.data.result)
            })
            .catch(err => {
                console.log("ERROR GET ALL ==> ", err)
            })
    }, [])



    // app.get('/', (req, res) => {
    //     imgModel.find({}, (err, items) => {
    //         if (err) {
    //             console.log(err);
    //             res.status(500).send('An error occurred', err);
    //         }
    //         else {
    //             res.render('imagesPage', { items: items });
    //         }
    //     });
    // });









    return (

        <Box>
            <Paper elevation={3}
                varient='outlined'>
                <Card>
                    {/* User Image */}
                    <CardMedia
                        component="img"
                        height="140"
                        image=""
                        alt=""
                    />

                    <CardContent>

                        {/* User Title */}
                        <Typography gutterBottom component="div"
                            variant="h5">
                            {allPosts.map((postObj, i) => {
                                //    ???????? Map through each post obj and 

                                // { postObj.name }
                            })}
                        </Typography>

                        {/* User Message */}
                        <Typography variant="body2" color="text.secondary">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio perspiciatis id commodi officia! Velit a debitis quasi voluptates, obcaecati culpa, reprehenderit explicabo quam provident aperiam hic officia aliquam ipsa perferendis.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio perspiciatis id commodi officia! Velit a debitis quasi voluptates, obcaecati culpa, reprehenderit explicabo quam provident aperiam hic officia aliquam ipsa perferendis.
                            lorem*10
                        </Typography>

                    </CardContent>

                    {/* Buttons */}
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Pin</Button>
                    </CardActions>
                </Card>

            </Paper>
        </Box>

    )
};

export default PostWall;
