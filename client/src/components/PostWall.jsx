import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

import CardPost from "./CardPost";

const PostWall = () => {
  let history = useHistory();

  let [registeredUser, setRegisteredUSer] = useState({});

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8000/api/user/getone", { withCredentials: true })
  //     .then((res) => {
  //       console.log("RESULT on load, GETONE => ", res);
  //       if (res.data) {
  //         setRegisteredUSer(res.data);
  //       }
  //     })
  //     .catch((err) => {
  //       history.push("/");
  //       console.log("ERR WHEN GETTING LOGGED IN USER", err);
  //     });
  // }, []);

  return <CardPost elevation={6}></CardPost>;
};

export default PostWall;
