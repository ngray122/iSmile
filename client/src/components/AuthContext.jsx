import React, { useState, useEffect } from "react";
import axios from "axios";

const AuthContext = React.createContext("");
const AuthContextProvider = ({ children }) => {
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
          // console.log("ERR WHEN GETTING LOGGED IN USER", err);
        });
    };
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ registeredUser, setRegisteredUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
