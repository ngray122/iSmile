import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import Paper from "@mui/material/Paper";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const EditPost = (props) => {
  let history = useHistory();
  let [formInputError, setFormInputError] = useState({});
  let [registeredUser, setRegisteredUSer] = useState({});
  let [onePost, setOnePost] = useState({});
  let [photo, setPhoto] = useState("");
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
        // console.log("one post log -> " + res.data.result);
      })
      .catch((err) => {
        history.push("/");
        console.log("err with get one post in Edit", err);
      });
  }, []);

  const onchangeFileSelectHandler = (e) => {
    e.preventDefault();
    const fileInput = e.target.files[0];
    const reader = new FileReader();
    let base64String;
    reader.onloadend = () => {
      base64String = reader.result.replace("data:", "").replace(/^.+,/, "");
      setPhoto(base64String);
      console.log("base64log edit-> " + base64String);
    };
    reader.readAsDataURL(fileInput);
  };

  const onChangeHandler = (e) => {
    setOnePost({
      ...onePost,
      [e.target.name]: e.target.value,
      [e.target.photo]: photo,
    });
    console.log("onePost.photo collected from edit form -> " + onePost.photo);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/posts/edit/${id}`, onePost)
      .then((res) => {
        console.log("Edit put -> ", res.data.result);
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
      variant="outlined"
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
          <div className="input-field" row={false}>
            {/* NAME INPUT */}
            <input
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
          </div>

          {/*  TEXT INPUT */}
          <div sx={{ p: "5px" }}>
            <input
              variant="standard"
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
          </div>

          {/* URL INPUT */}
          <div row={false} sx={{ p: "5px" }}>
            <input
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
          </div>

          {/* IMAGE UPLOAD */}
          <div row={false} sx={{ p: "5px" }}>
            <input
              className="imgUpload"
              type="file"
              onChange={onchangeFileSelectHandler}
              variant="standard"
              id="component-outlined"
              value=""
              label="Add photo"
              input="file"
              filename="photo"
              accept=".png, .jpg, .jpeg"
              name="photo"
              // helperText={formInputError.photo?.message}xs
            />
          </div>

          <button type="submit">Submit</button>
          <button>
            <Link to={"/dashboard"} className="btn">
              Cancel
            </Link>
          </button>
        </FormControl>
      </form>
    </Paper>
  );
};

export default EditPost;
