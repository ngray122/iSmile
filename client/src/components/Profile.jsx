import React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

const Profile = () => {
  let history = useHistory();

  let [registeredUser, setRegisteredUSer] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/user/getone", { withCredentials: true })
      .then((res) => {
        if (res.data) {
          setRegisteredUSer(res.data);
        }
      })
      .catch((err) => {
        history.push("/");
        console.log("ERR WHEN GETTING LOGGED IN USER", err);
      });
  }, []);

  return (
    <Paper elevation={3} sx={{ p: "20px" }}>
      <Card>
        <CardMedia>
          <Avatar
            alt="Remy Sharp"
            src="./client/img/duck.png"
            sx={{ width: 75, height: 75 }}
          />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Welcome {registeredUser.firstName}!
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
            eveniet, et facere consequatur unde aspernatur aliquam voluptatibus
            excepturi veniam debitis laudantium modi delectus, assumenda
            corporis explicabo aperiam voluptatem soluta itaque.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Paper>
  );
};
export default Profile;
