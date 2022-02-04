
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
import { FormGroup, Input, TextField } from "@mui/material";
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// - Add rows to text input for user experience       
//- Camera icon to acctpy onchange for file upload  
// -Form input place holder covers user input text











const CreatePost = () => {

    let history = useHistory();
    let [formInputError, setFormInputError] = useState({});


    let [registeredUser, setRegisteredUSer] = useState({});

    let[name, setName] = useState('');
    let [text, setText] = useState('');
    let [url, setUrl ] = useState('');
    let [photo, setPhoto] = useState('');

    // let [userFormInput, setUserFormInput] = useState({
    //     name: '',
    //     text: '',
    //     url: '',
    //     photo: ''

    // }
    // )

   

    // Users can only access this page while they are logged in 
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



    // const changeHandler = (e) => {
    //     e.preventDefault();
    //     if (e.target.type == 'file') {
    //         setUserFormInput({
    //             ...userFormInput,
    //             [e.target.photo]: e.target.file,
    //         })
    //     } else {
    //         console.log([e.target.name])
    //         setUserFormInput({
                
    //             [e.target.name]: e.target.value,
    //             [e.target.name]: e.target.value,
    //             [e.target.name]: e.target.value

    //         })
    //     }
    // }


    const fileSelectHandler = (e) => {
        e.preventDefault();
        console.log("photo upload clicked")
        setPhoto({photo: e.target.files[0]})

    }

    // onFileChange(e) {
    //     this.setState({ profileImg: e.target.files[0] })
    // }


    // Creates new post for user
    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('text', url);
        formData.append('photo', photo);

        // let formInputObj = { name, text, url, photo}
        axios.post("http://localhost:8000/api/posts/create", formData)
            .then(res => {
                console.log("CREATE POST post ==>", res)
                if (res.data.errors) {
                    setFormInputError(res.data.errors)
                } else {
                    history.push('/dashboard')
                }
            })
            .catch(err => console.log("error in submitting post request", err))

    }


    // onSubmit(e)
    //     formData.append('profileImg', this.state.profileImg)
    //     axios.post("http://localhost:4000/api/user-profile", formData, {
    //     }).then(res => {
    //         console.log(res)
    //     })
























    return (


        <Box
            sx={{ bgcolor: 'primary.light' }}>
            <form encType='multipart/form-data'
                onSubmit={submitHandler}>
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
                    <FormControl>
                        <Typography
                            component='legend'
                            variant='h6'

                        >What made you smile today, {registeredUser.firstName}? Share it with the world
                        </Typography>
                        {/* Form Starts */}
                        <FormGroup
                            row={false}
                            sx={{ p: '5px' }}
                        >
                            {/* NAME INPUT */}
                            <TextField
                                variant="standard"
                                id="component-outlined"
                                value={name}
                                // error
                                onChange={(e)=>setName(e.target.value)}
                                label="Name of your post"
                                input='name'
                                name='name'
                                helperText={formInputError.name?.message}
                            />
                        </FormGroup>

                        {/* POST TEXT */}
                        <FormGroup
                            sx={{ p: '5px' }}
                        >
                            <TextField
                                variant="standard"
                                // type='email'
                                id="component-outlined"
                                value={text}
                                maxRows='6'
                                name='text'
                                onChange={(e)=>setText(e.target.value)}
                                label="Text Area"
                                input='name'
                                
                                helperText={formInputError.url?.message}

                            // errorText={formInputError.text?.message}
                            />
                        </FormGroup>
                        <FormGroup
                            row={false}
                            sx={{ p: '5px' }}
                        >
                            <TextField
                                variant="standard"
                                // error
                                id="component-outlined"
                                value={url}
                                onChange={(e)=>setUrl(e.target.value)}
                                label="Add Link (optional)"
                                input='url'
                                name='url'
                                helperText={formInputError.url?.message}
                            />
                        </FormGroup>
                        <FormGroup
                            row={false}
                            sx={{ p: '5px' }}
                        >

                            <Input
                                variant="standard"
                                id="component-outlined"
                                value=''
                                onChange={fileSelectHandler}
                                label="Add photo"
                                input='file'
                                accept='.png, .jpg, .jpeg'
                                type='file'
                                // error
                                helperText={formInputError.photo?.message}
                            />
                            {/* <PhotoCameraIcon></PhotoCameraIcon> */}
                        </FormGroup>
                        <Button
                            // onClick={() => console.log("Button clicked")}
                            type="submit"
                            // component={} to="/"
                            variant="contained"

                        >Submit
                        </Button>

                    </FormControl>

                </Paper>
            </form>
        </Box>



    )
};

export default CreatePost;
