import Card from "@mui/material/Card";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Avatar, CardActionArea, CardHeader } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { CardTitle, CardSubtitle, CardImg, CardText } from "reactstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import DeleteIcon from "@mui/icons-material/Delete";

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
                p="10px"
                component="img"
                height="400"
                width="100%"
                alt="posted image"
                src={`data:image/jpeg;base64,${postObj.photo}`}
              ></CardImg>
              <CardContent sx={{ bgcolor: "primary.light" }}>
                <Typography gutterBottom variant="h5" component="div">
                  {postObj.name}
                </Typography>
                <CardText variant="body2" color="text.secondary">
                  {postObj.text}
                </CardText>
                <a href={postObj.url} variant="body2" color="text.secondary">
                  {postObj.url}
                </a>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Pin
              </Button>

              <Link
                to={`/posts/edit/${postObj._id}`}
                sx={{ textDecoration: "none" }}
                textDecoration="none"
              >
                <Button
                  size="small"
                  color="primary"
                  sx={{ textDecoration: "none" }}
                  textDecoration="none"
                >
                  {" "}
                  <i class="material-icons">edit</i>
                </Button>
              </Link>
              <IconButton
                onClick={() => deletePost(postObj._id)}
                size="small"
                color="primary"
                aria-label="delete"
              >
                <DeleteIcon />
              </IconButton>
            </CardActions>
          </Card>
        );
      })}
    </>
  );
};

export default CardPost;
