import Card from "@mui/material/Card";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Avatar, CardActionArea, CardHeader } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { CardTitle, CardSubtitle, CardImg, CardText } from "reactstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const CardPost = () => {
  let [allPosts, setAllPosts] = useState([]);
  let [deleted, setDeleted] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/posts/getall")
      .then((res) => {
        setAllPosts(res.data.result);
      })
      .catch((err) => {
        console.log("ERROR GET ALL ==> ", err);
      });
  }, [deleted]);

  //   Delete post
  const deletePost = (postId) => {
    axios
      .delete(`http://localhost:8000/api/posts/delete/${postId}`)
      .then((res) => setDeleted(!deleted))
      .catch((err) => console.log("error in submitting delete request"));
  };

  return (
    <>
      {allPosts.map((postObj, i) => {
        return (
          <Card key={i} sx={{ maxWidth: 750, p: 2, mb: 3 }} elevation={3}>
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
