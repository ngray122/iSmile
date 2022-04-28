import React, { useState, useEffect } from "react";
import axios from "axios";

const UserContext = React.createContext(null);
const UserContextProvider = ({ children }) => {
  let [registeredUser, setRegisteredUser] = useState("");

  useEffect(() => {
    const isLoggedIn = () => {
      axios
        .get("http://localhost:8000/api/user/getone", { withCredentials: true })
        .then((res) => {
          console.log("RESULT ON DASH after login , => ", res);
          if (res.data) {
            setRegisteredUser(res.data);
          }
        })
        .catch((err) => {
          console.log("ERR WHEN GETTING LOGGED IN USER", err);
        });
    };
    isLoggedIn();
  }, []);

  return (
    <UserContext.Provider value={{ registeredUser, setRegisteredUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
