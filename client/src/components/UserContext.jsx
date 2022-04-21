import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";

const UserContext = React.createContext();
const UserContextProvider = ({ children }) => {
  let [registeredUser, setRegisteredUser] = useState(null);

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
  return (
    <UserContext.Provider value={registeredUser}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
