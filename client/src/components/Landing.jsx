import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";



// this will be the landing page with about and carosel

const Landing = (props) => {
  let history = useHistory();

  let [registeredUser, setRegisteredUSer] = useState({});


  useEffect(() => {
    axios.get('http://localhost:8000/api/user/getone', { withCredentials: true })
        .then(res => {
            // console.log("RESULT ON DASH after login , => ", res)
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


    <div>
      <h1>INSERT CAROSEL HERE ------- FROM LANDING</h1>


    </div>
  ) 
};


export default Landing;
