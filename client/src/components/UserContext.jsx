import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";

const useIsLoggedIn = () => {
  let [registeredUser, setRegisteredUser] = useState("");
  const history = useHistory();
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/user/getone", { withCredentials: true })
      .then((res) => {
        // console.log("RESULT ON DASH after login , => ", res);
        if (res.data) {
          setRegisteredUser(res.data);
        }
      })
      .catch((err) => {
        history.push("/");
        console.log("ERR WHEN GETTING LOGGED IN USER on dash", err);
      });
  }, []);
};

export const UserContext = React.createContext(useIsLoggedIn);
console.log(useIsLoggedIn);
