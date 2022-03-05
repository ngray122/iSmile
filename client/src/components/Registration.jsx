import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {
    Link
} from "react-router-dom";
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import FormLabel from '@mui/material/FormLabel';
import { FormGroup, TextField } from "@mui/material";
import { borders } from '@mui/system';


// ********* Can't get borders to work 


const User = (props) => {

    let [formInputError, setFormInputError] = useState({});

    let [firstName, setFirstName] = useState('');
    let [lastName, setLastName] = useState('');
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [verifyPassword, setVerifyPassword] = useState('');
    // let [inputObj, setInputObj] = useState({
    //     firstName: setFirstName(''),
    //     lastName: setLastName(''),
    //     email: setEmail(''),
    //     password: setPassword(''),
    //     verifyPassword: setVerifyPassword('')

    // })



    const history = useHistory();

    // CREATE NEW USER
    const register = (e) => {
        // prevents page from reloading onEvent
        e.preventDefault();
        // information collected from form inputs 
        let formInputObj = { firstName, lastName, email, password, verifyPassword }
        axios.post("http://localhost:8000/api/user/register", formInputObj, { withCredentials: true })
            .then(res => {
                // console.log("REGISTER RES ==>", res)
                if (res.data.errors) {
                    setFormInputError(res.data.errors)
                } else {
                    history.push('/dashboard')
                }
            })
            .catch(err => console.log("error in submitting post request", err))

    }

    return (
        // REGISTRATION FORM
        <form autoComplete="off" onSubmit={register}
        >
            <Container
                align="center"
                // justifyContent="center"
                variant="outlined"
                // elevation=''
                mx='auto'
                sx={{ p: '20px'}}
                border="2" 
                borderColor="black"
                // sx={{bgcolor:'primary.light'}}



            >

                <FormLabel
                    component='legend'
                >Register

                </FormLabel>
                <FormControl
                >
                    <FormGroup
                        row={false}
                        sx={{ p: '5px' }}
                    >
                        <TextField
                            variant="standard"
                            // type='email'
                            id="component-outlined"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            label="First Name"
                            input='text'
                            // required
                            helperText={formInputError.firstName?.message}
                        />
                    </FormGroup>

                    <FormGroup
                        row={false}
                        sx={{ p: '5px' }}
                    >
                        <TextField
                            variant="standard"
                            // type='email'
                            id="component-outlined"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            label="Last Name"
                            input='text'
                            // required
                            helperText={formInputError.lastName?.message}
                        />
                    </FormGroup>


                    <FormGroup
                        row={false}
                        sx={{ p: '5px' }}
                    >
                        <TextField
                            variant="standard"
                            // type='email'
                            id="component-outlined"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            label="Email"
                            input='email'
                            // required
                            errorText={formInputError.email?.message}
                        />
                    </FormGroup>


                    <FormGroup
                        row={false}
                        sx={{ p: '5px' }}
                    >
                        <TextField
                            variant="standard"
                            type='password'
                            id="component-outlined"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            label="Password"
                            input='password'
                            // required
                            errorText={formInputError.password?.message}
                        />
                        {/* <p>{formInputError}</p> */}
                    </FormGroup>


                    <FormGroup
                        row={false}
                        sx={{ p: '5px' }}
                    >
                        <TextField
                            variant="standard"
                            type='password'
                            id="component-outlined"
                            value={verifyPassword}
                            onChange={(e) => setVerifyPassword(e.target.value)}
                            label="Verify Password"
                            input='password'
                            // required
                            errorText={formInputError.password?.message}
                        />
                        {/* <p>{formInputError}</p> */}
                    </FormGroup>
                    <Button
                        // onClick={()=>console.log("Button clicked")}
                        type="submit"
                        // component={} to="/"
                        variant="contained"
                    >Register
                    </Button>
                </FormControl>
            </Container >
        </form>

    )
};

export default User;