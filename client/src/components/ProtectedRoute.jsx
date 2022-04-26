import { Redirect } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./UserContext";

const ProtectedRoute = ({ children }) => {
  const registeredUser = useContext(UserContext);
  console.log("regsiteredUser from  ProtectedRoute", registeredUser);

  if (registeredUser == null) {
    return <Redirect to="/" />;
  }
  return [children];
};
export default ProtectedRoute;
