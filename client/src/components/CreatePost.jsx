import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PostForm from "./PostForm";

const CreatePost = () => {
  let history = useHistory();
  let [formInputError, setFormInputError] = useState({});

  let [registeredUser, setRegisteredUSer] = useState({});

  let [name, setName] = useState("");
  let [text, setText] = useState("");
  let [url, setUrl] = useState("");
  let [photo, setPhoto] = useState("");

  // Users can only access this page while they are logged in
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/user/getone", { withCredentials: true })
      .then((res) => {
        // console.log("RESULT on load, GETONE registered user => ", res)
        if (res.data) {
          setRegisteredUSer(res.data);
        }
      })
      .catch((err) => {
        history.push("/");
        console.log("ERR WHEN GETTING LOGGED IN USER", err);
      });
  }, []);

  const onchangeFileSelectHandler = (e) => {
    e.preventDefault();
    const fileInput = e.target.files[0];
    const reader = new FileReader();
    let base64String;
    reader.onloadend = () => {
      base64String = reader.result.replace("data:", "").replace(/^.+,/, "");
      // console.log("fileInput log -> " + fileInput);
      setPhoto(base64String);
      console.log("base64log -> " + base64String);
    };
    reader.readAsDataURL(fileInput);
  };

  // Creates new post for user
  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("text", text);
    formData.append("url", url);
    formData.append("photo", photo);
    axios
      .post("http://localhost:8000/api/posts/create", formData)
      .then((res) => {
        console.log("CREATE POST ==>", res);
        if (res.data.errors) {
          setFormInputError(res.data.errors);
        } else {
          history.push("/dashboard");
        }
      })
      .catch((err) => console.log("error in submitting post request", err));
  };

  return (
    <Box sx={{ bgcolor: "primary.light" }}>
      <Typography component="legend" variant="h6">
        What made you smile today, {registeredUser.firstName}?
      </Typography>

      <PostForm
        onchangeFileSelectHandler={onchangeFileSelectHandler}
        submitHandler={submitHandler}
        formInputError={formInputError}
        setName={setName}
        setText={setText}
        name={name}
        text={text}
        url={url}
        setUrl={setUrl}
      ></PostForm>
    </Box>
  );
};

export default CreatePost;
