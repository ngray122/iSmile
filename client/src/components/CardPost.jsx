import Card from "@mui/material/Card";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { CardActionArea } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const CardPost = () => {
  let [allPosts, setAllPosts] = useState([]);
  let [deleted, setDeleted] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/posts/getall")
      .then((res) => {
        console.log("RES getting all posts ===> ", res);
        setAllPosts(res.data.result);
      })
      .catch((err) => {
        console.log("ERROR GET ALL ==> ", err);
      });
  }, [deleted]);

  //   Delete post
  const deletePost = (postId) => {
    console.log(postId);
    axios
      .delete(`http://localhost:8000/api/posts/delete/${postId}`)
      .then((res) => setDeleted(!deleted))
      .catch((err) => console.log("error in submitting delete request"));
  };

  return (
    <>
      {allPosts.map((postObj, i) => {
        console.log("post obj -> " + postObj);
        return (
          <Card sx={{ maxWidth: 645 }}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {postObj.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {postObj.text}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {postObj.url}
                </Typography>
                <CardMedia
                  component="img"
                  height="194"
                  image={postObj.photo}
                  alt="posted image"
                ></CardMedia>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Pin
              </Button>
              <Button size="small" color="primary">
                Edit
              </Button>
              <Button
                onClick={() => deletePost(postObj._id)}
                size="small"
                color="primary"
              >
                Delete
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </>
  );
};

export default CardPost;
