import React from "react";
import Card from "@mui/material/Card";
import { useContext } from "react";
import { Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import CardContent from "@mui/material/CardContent";
import { AuthContext } from "./AuthContext";

const Profile = () => {
  const { registeredUser, setRegisteredUser } = useContext(AuthContext);
  console.log(registeredUser);
  return (
    <Paper elevation={3} sx={{ m: 3, p: "20px", bgcolor: "primary" }}>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Hi {registeredUser.firstName}!
          </Typography>
          <Typography variant="body2" color="text.secondary">
            What does a smile do for you? When we smile, it makes us feel good
            and triggers positive thoughts about ourselves and others around us.
            It signals to your brain that you are happy, which encourages it to
            release hormones, including endorphins, serotonin and dopamine, that
            increase your good feelings. By having all of these hormones running
            through your body, it lifts your mood and helps you relax.
          </Typography>
          <Typography variant="subtitle">Share your happiness!</Typography>
        </CardContent>
      </Card>
    </Paper>
  );
};
export default Profile;
