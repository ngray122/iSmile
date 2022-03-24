import Card from "@mui/material/Card";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Avatar, CardActionArea, CardHeader } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { CardTitle, CardSubtitle, CardImg, CardText } from "reactstrap";
import { spacing } from "@mui/system";
import { LinkButton, Link } from "react-router-dom/cjs/react-router-dom.min";

const CardPost = () => {
  let [allPosts, setAllPosts] = useState([]);
  let [deleted, setDeleted] = useState(false);
  let [baseImg, setBaseImg] = useState("");

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
    // console.log(postId);
    axios
      .delete(`http://localhost:8000/api/posts/delete/${postId}`)
      .then((res) => setDeleted(!deleted))
      .catch((err) => console.log("error in submitting delete request"));
  };

  //   const decodeBase64 = (imgString) => {
  //     let base64ToString = Buffer.from(imgString, "base64").toString();
  //     setBaseImg({ data: base64ToString });
  //   };

  return (
    <>
      {allPosts.map((postObj, i) => {
        {
          /* console.log("post obj -> " + postObj.photo); */
        }
        let imgString = postObj.photo;
        return (
          <Card key={i} sx={{ maxWidth: 645, p: 2, m: 2 }}>
            <CardHeader>
              <Avatar></Avatar>
              <CardTitle tag="h5">User's Name</CardTitle>
              <subheader>Date/Time</subheader>
            </CardHeader>
            <CardActionArea>
              <CardImg
                component="img"
                height="400"
                width="100%"
                alt="posted image"
                src={`data:image/jpeg;base64,${postObj.photo}`}
              ></CardImg>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {postObj.name}
                </Typography>
                <CardText variant="body2" color="text.secondary">
                  {postObj.text}
                </CardText>
                <Link to="{postObj.url}" variant="body2" color="text.secondary">
                  {postObj.url}
                </Link>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Pin
              </Button>
              <Link to={`/posts/edit/${postObj._id}`}>
                <Button size="small" color="primary">
                  {" "}
                  Edit
                </Button>
              </Link>
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
