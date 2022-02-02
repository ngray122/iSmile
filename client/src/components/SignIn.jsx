import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Registration from "./Registration";
import Login from "./Login"

const SignIn = (props) => {
  return (


    <div>
        <div className="row">
          <Registration></Registration>
          <Login></Login>
        </div>

      </div>

  )
};

export default SignIn;

