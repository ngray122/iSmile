import { Route, Redirect } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./UserContext";

const ProtectedRoute = ({ children }) => {
  const registeredUser = useContext(UserContext);
  // console.log("regsiteredUser from  ProtectedRoute", registeredUser);

  if (registeredUser == null) {
    return <Redirect to="/" />;
  }
  // console.log("children -> ", children);
  return [children];
};
// export default ProtectedRoute;

// const ProtectedRoute = ({ component: Component, ...rest }) => {
//   const { registeredUser } = useContext(UserContext);
//   console.log("regsiteredUser from  ProtectedRoute", registeredUser);

//   <Route
//     {...rest}
//     render={(props) => {
//       if (registeredUser) {
//         return <Component {...rest} {...props} />;
//       } else {
//         // If they are not then we need to redirect to a public page
//         return (
//           <Redirect
//             to={{
//               pathname: "/",
//               state: {
//                 from: props.location,
//               },
//             }}
//           />
//         );
//       }
//     }}
//   />;
// };
export default ProtectedRoute;
