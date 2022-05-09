import Card from "@mui/material/Card";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { CardActionArea } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { CardImg } from "reactstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import DeleteIcon from "@mui/icons-material/Delete";

const CardPost = () => {
  let [allPosts, setAllPosts] = useState([]);
  let [deleted, setDeleted] = useState(false);

  // get all posts
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
          <Card key={i} sx={{ mt: 4, maxWidth: 700 }} elevation={3}>
            <CardActionArea>
              <CardImg
                p="10px"
                component="img"
                // height="400"
                minWidth="100%"
                alt="posted image"
                src={`data:image/jpeg;base64,${postObj.photo}`}
              />
              <CardContent className="card-content">
                <Typography
                  gutterBottom
                  variant="h5"
                  color="primary.light"
                  fontWeight="450"
                >
                  {postObj.name}
                </Typography>
                <Typography
                  sx={{ wordWrap: "break-word" }}
                  variant="body1"
                  color="primary.light"
                  marginBottom="10px"
                >
                  {postObj.text}
                </Typography>
                <a href={postObj.url} id="url-post" target="_blank">
                  {postObj.url}
                </a>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to={`/posts/edit/${postObj._id}`}>
                <Button
                  size="small"
                  sx={{ textDecoration: "none", color: "transparent" }}
                >
                  {" "}
                  <i className="material-icons card-action-icon">edit</i>
                </Button>
              </Link>
              <IconButton
                onClick={() => deletePost(postObj._id)}
                size="small"
                color="primary"
                aria-label="delete"
              >
                <DeleteIcon className="card-action-icon" />
              </IconButton>
            </CardActions>
          </Card>
        );
      })}
    </>
  );
};

export default CardPost;
