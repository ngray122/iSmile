import { Redirect } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./UserContext";

const ProtectedRoute = ({ children }) => {
  const registeredUser = useContext(UserContext);

  if (!registeredUser) {
    return <Redirect to="/" replace />;
  }
  return children;
};
export default ProtectedRoute;
