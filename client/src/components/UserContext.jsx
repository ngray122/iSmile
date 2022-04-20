import React, { createContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";

export const UserContext = createContext(null);

export const IsLoggedIn = () => {
  let history = useHistory();

  let [registeredUser, setRegisteredUSer] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/user/getone", { withCredentials: true })
      .then((res) => {
        // console.log("RESULT ON DASH after login , => ", res);
        if (res.data) {
          setRegisteredUSer(res.data);
        }
      })
      .catch((err) => {
        history.push("/");
        console.log("ERR WHEN GETTING LOGGED IN USER on dash", err);
      });
  }, []);
};
