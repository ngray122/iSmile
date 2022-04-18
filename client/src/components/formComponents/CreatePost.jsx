import React, { useCallback, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import PostForm from "./PostForm";
import styles from "../../static/css/style.css";

const CreatePost = (props) => {
  let history = useHistory();
  let [formInputError, setFormInputError] = useState({});
  let [registeredUser, setRegisteredUSer] = useState({});
  let [photo, setPhoto] = useState("");
  let [formInfo, setFormInfo] = useState({
    name: "",
    text: "",
    url: "",
  });
  let [fileName, setFileName] = useState("");

  const onChangeFileSelectHandler = (e) => {
    let fileInput = e.target.files[0];
    const reader = new FileReader();
    let base64String;
    reader.onloadend = () => {
      base64String = reader.result.replace("data:", "").replace(/^.+,/, "");
      setPhoto(base64String);
      setFileName(fileInput.name);
    };
    reader.readAsDataURL(fileInput);
  };

  const onChangeHandler = (e) => {
    setFormInfo({
      ...formInfo,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = useCallback(
    (e) => {
      e.preventDefault();
      formInfo = {
        ...formInfo,
        photo: photo,
      };
      axios
        .post("http://localhost:8000/api/posts/create", formInfo)
        .then((res) => {
          if (res.data.error) {
            setFormInputError(res.data.error.errors);
          } else {
            history.push("/dashboard");
          }
        })
        .catch((err) => console.log("error in submitting post request", err));
    },
    [formInfo, photo]
  );

  const handleChange = (e) => {
    [e.target.value] = props.fileName;
  };
  return (
    <Paper
      sx={{ maxWidth: "900px", p: "30px" }}
      elevation={3}
      align="center"
      mx="auto"
      variant="outlined"
    >
      <Typography component="legend" variant="h6" padding="10px">
        What made you smile today, {registeredUser.firstName}?
      </Typography>
      <PostForm
        onChangeHandler={onChangeHandler}
        onChangeFileSelectHandler={onChangeFileSelectHandler}
        submitHandler={submitHandler}
        formInfo={formInfo}
        formInputError={formInputError}
        handleChange={handleChange}
        fileName={fileName}
      />
    </Paper>
  );
};

export default CreatePost;
