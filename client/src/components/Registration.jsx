import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {
    Link
} from "react-router-dom";


const User = (props) => {


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

    let [formInputError, setFormInputError] = useState({});

    const history = useHistory();

    // CREATE NEW
    const submitHandler = (e) => {
        e.preventDefault();
        let formInputObj = { firstName, lastName, email, password, verifyPassword }
        axios.post("http://localhost:8000/api/user/register", formInputObj)
            .then(res => {
                console.log("SUCCESS submit postRequest createOne res ==>", res)
                if (res.data.error) {
                    setFormInputError(res.data.error.errors)
                } else {

                    history.push('/')
                }
            })
            .catch(err => console.log("error in submitting post request", err))

    }

    return (
        <div className="col-6">
            <h3 className="mt-4">Registration</h3>
            <h6 className="m-4">All fields are required</h6>
            <form onSubmit={submitHandler} className='w-50 mx-auto'>
                <div className=" input-group mb-3">
                    <span className="input-group-text">First Name:</span>
                    <input type="text" value={firstName} className=" form-control" placeholder="Bob" onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <p>{formInputError.firstName?.message}</p>
                <div className="input-group mb-3">
                    <span className="input-group-text">Last Name: </span>
                    <input type="text" value={lastName} className="form-control" placeholder="Smith" onChange={(e) => setLastName(e.target.value)} />
                </div>
                <p>{formInputError.lastName?.message}</p>
                <div className="input-group mb-3">
                    <span className="input-group-text">Email:</span>
                    <input type="text" value={email} className="form-control" placeholder="bsmith@mail.com" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <p>{formInputError.email?.message}</p>
                <div className="input-group mb-3">
                    <span className="input-group-text">Password:</span>
                    <input type="password" value={password} className="form-control" placeholder="At least 8 characters" onChange={(e) => setPassword(e.target.value)} />
                    <p>{formInputError.password?.message}</p>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">Verify Password:</span>
                    <input type="password" value={verifyPassword} className="form-control" placeholder="Confirm Password" onChange={(e) => setVerifyPassword(e.target.value)} />
                    <p>{formInputError.verifyPassword?.message}</p>
                </div>

                <div>
                    <input className="btn btn-primary m-4" type="submit" value="Register" />
                </div>






            </form>
        </div>
    )
};

export default User;