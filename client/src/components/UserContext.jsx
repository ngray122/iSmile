import React, { useState } from "react";

const UserContext = React.createContext("");
const UserContextProvider = ({ children }) => {
  let [registeredUser, setRegisteredUser] = useState("");
  return (
    <UserContext.Provider value={{ registeredUser, setRegisteredUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
