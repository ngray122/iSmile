import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {
    Link
} from "react-router-dom";


const Login = (props) => {


    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');

    let [formInputError, setFormInputError] = useState({});

    const history = useHistory();

    const submitHandler = (e) => {
        e.preventDefault();
        // let formInputObj = { email, password }
        // axios.post("http://localhost:8000/api/user/register", formInputObj)
        //     .then(res => {
        //         console.log("SUCCESS submit postRequest createOne res ==>", res)
        //         if (res.data.error) {
        //             setFormInputError(res.data.error.errors)
        //         } else {

        //             history.push('/')
        //         }
        //     })
        //     .catch(err => console.log("error in submitting post request", err))
        }


        return (

            <div className="col-6">
                <h3 className="m-4">Login</h3>

                <form onSubmit={submitHandler} className="w-50 mx-auto">

                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Email:</span>
                        <input type="text" value={email} className="form-control" placeholder="bsmith@mail.com" aria-label="" aria-describedby="basic-addon1" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <p>{formInputError.email?.message}</p>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Password:</span>
                        <input type="password" value={password} className="form-control" placeholder="At least 8 characters" aria-label="" aria-describedby="basic-addon1" onChange={(e) => setPassword(e.target.value)} />
                        <p>{formInputError.password?.message}</p>
                    </div>


                    <div>
                        <input className="btn btn-primary m-4" type="submit" value="Log In" />
                    </div>
            

                </form>
            </div>




        )
    };



export default Login;










