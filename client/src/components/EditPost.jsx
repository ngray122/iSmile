import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import Paper from "@mui/material/Paper";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FormGroup, Input, TextField } from "@mui/material";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const EditPost = (props) => {
  let history = useHistory();
  let [formInputError, setFormInputError] = useState({});
  let [registeredUser, setRegisteredUSer] = useState({});
  let [onePost, setOnePost] = useState({});
  let [photo, setPhoto] = useState({});
  let { id } = useParams();

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

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/posts/getone/${id}`)
      .then((res) => {
        setOnePost(res.data.result);
        // console.log("one post log -> " + res.data);
      })
      .catch((err) => {
        history.push("/");
        console.log("err with get one post in Edit", err);
      });
  }, []);

  const onchangeFileSelectHandler = (e) => {
    console.log("hello from inside ");
    e.preventDefault();
    const fileInput = e.target.files[0];
    const fReader = new FileReader();
    let img;
    fReader.onloadend = (e) => {
      img = fReader.result.readAsDataURL(fileInput);
      setPhoto(img);
      console.log("img in filehandler -> " + img);
      // console.log("base64log -> " + base64String);
    };
  };

  const onChangeHandler = (e) => {
    // console.log("Onchange is working");

    setOnePost({
      ...onePost,
      [e.target.name]: e.target.value,
      [e.target.text]: e.target.value,
      [e.target.url]: e.target.value,
      [e.target.photo]: { onchangeFileSelectHandler },
    });

    console.log("onePost.photo collected from edit form -> " + onePost.photo);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/posts/edit/${id}`, onePost)
      .then((res) => {
        console.log("Edit put -> ", res.data.result);
        // console.log(
        //   "onePost I am sending as PUT req to updatePost -> " + onePost
        // );
        if (res.data.error) {
          setFormInputError(res.data.errors);
        } else {
          history.push("/dashboard");
        }
      })
      .catch((err) => console.log("error in submitting post request", err));
  };

  return (
    <Paper
      align="center"
      mx="auto"
      container
      elevation={3}
      sx={{ p: "30px", maxWidth: "750px" }}
    >
      <Typography component="legend" variant="h6">
        Edit your post
      </Typography>
      <form encType="multipart/form-data" onSubmit={submitHandler}>
        <FormControl>
          {/* Form Starts */}
          <FormGroup row={false}>
            {/* NAME INPUT */}
            <TextField
              variant="standard"
              id="component-outlined"
              value={onePost.name}
              // error
              onChange={onChangeHandler}
              label="Name of your post"
              input="name"
              name="name"
              //   helperText={formInputError.name?.message}
            />
          </FormGroup>

          {/*  TEXT INPUT */}
          <FormGroup sx={{ p: "5px" }}>
            <TextField
              variant="standard"
              // type='email'
              id="component-outlined"
              value={onePost.text}
              maxRows="6"
              name="text"
              onChange={onChangeHandler}
              label="Text Area"
              input="text"
              //   helperText={formInputError.url?.message}

              // errorText={formInputError.text?.message}
            />
          </FormGroup>

          {/* URL INPUT */}
          <FormGroup row={false} sx={{ p: "5px" }}>
            <TextField
              variant="standard"
              // error
              id="component-outlined"
              value={onePost.url}
              onChange={onChangeHandler}
              label="Add Link (optional)"
              input="url"
              name="url"
              //   helperText={formInputError.url?.message}
            />
          </FormGroup>

          {/* IMAGE UPLOAD */}
          <FormGroup row={false} sx={{ p: "5px" }}>
            <Input
              className="imgUpload"
              type="file"
              onChange={onchangeFileSelectHandler}
              variant="standard"
              id="component-outlined"
              // value={onePost.photo}
              label="Add photo"
              input="file"
              filename="photo"
              accept=".png, .jpg, .jpeg"
              name="photo"
              // helperText={formInputError.photo?.message}xs
            />
          </FormGroup>

          <Button type="submit" variant="contained">
            Submit
          </Button>
          <Link to={"/dashboard"} className="btn">
            Cancel
          </Link>
        </FormControl>
      </form>
    </Paper>
  );
};

export default EditPost;
