import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import Box from "@mui/material/Box";

import CardPost from "./CardPost";

//??????????? Does the axios call for registeredUser need to be on each component? Not dry code

const PostWall = () => {
  let history = useHistory();

  let [registeredUser, setRegisteredUSer] = useState({});

  // empty array to take in posts from db

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/user/getone", { withCredentials: true })
      .then((res) => {
        console.log("RESULT on load, GETONE => ", res);
        if (res.data) {
          setRegisteredUSer(res.data);
        }
      })
      .catch((err) => {
        history.push("/");
        console.log("ERR WHEN GETTING LOGGED IN USER", err);
      });
  }, []);

  // app.get('/', (req, res) => {
  //     imgModel.find({}, (err, items) => {
  //         if (err) {
  //             console.log(err);
  //             res.status(500).send('An error occurred', err);
  //         }
  //         else {
  //             res.render('imagesPage', { items: items });
  //         }
  //     });
  // });

  return (
    <Box>
      <Paper elevation={3} varient="outlined">
        <CardPost></CardPost>
      </Paper>
    </Box>
  );
};

export default PostWall;
