import React, { useState, useEffect } from "react";
import axios from "axios";

const UserContext = React.createContext();
const UserContextProvider = ({ children }) => {
  let [registeredUser, setRegisteredUser] = useState(null);

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
        console.log("ERR WHEN GETTING LOGGED IN USER", err);
      });
  }, []);
  return (
    <UserContext.Provider value={registeredUser}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
