import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import PostForm from "./PostForm";

const EditPost = (props) => {
  let history = useHistory();
  let [formInputError, setFormInputError] = useState([]);
  let [registeredUser, setRegisteredUSer] = useState({});
  let [formInfo, setFormInfo] = useState({});
  let [photo, setPhoto] = useState({});
  let { id } = useParams();

  //
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
        setFormInfo(res.data.result);
      })
      .catch((err) => {
        history.push("/");
        console.log("err with get one post in Edit", err);
      });
  }, []);

  const onChangeFileSelectHandler = (e) => {
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
    e.preventDefault();

    setFormInfo({
      ...formInfo,
      [e.target.name]: e.target.value,
      photo: photo,
    });
    console.log("photo log inside onChange-> ", photo);
    // console.log("onePost.photo log inside onChange-> ", onePost.photo);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/posts/edit/${id}`, formInfo)
      .then((res) => {
        console.log("res.data", res.data);
        // console.log("Edit put -> ", res.data.result);
        if (res.data.error) {
          setFormInputError(res.data.error.errors);
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
      // variant="outlined"
      elevation={3}
      sx={{ p: "30px", maxWidth: "750px" }}
    >
      <Typography component="legend" variant="h6">
        Edit your post
      </Typography>
      <PostForm
        submitHandler={submitHandler}
        onChangeHandler={onChangeHandler}
        onChangeFileSelectHandler={onChangeFileSelectHandler}
        formInputError={formInputError}
        formInfo={formInfo}
      />
    </Paper>
  );
};

export default EditPost;
