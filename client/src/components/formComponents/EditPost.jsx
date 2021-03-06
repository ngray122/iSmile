import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import Typography from "@mui/material/Typography";
import PostForm from "./PostForm";
import styles from "../../static/css/style.css";
import Paper from "@mui/material/Paper";

const EditPost = (props) => {
  let history = useHistory();
  let [formInputError, setFormInputError] = useState([]);
  let [formInfo, setFormInfo] = useState({});
  let [photo, setPhoto] = useState("");
  let { id } = useParams();
  let [fileName, setFileName] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/posts/getone/${id}`)
      .then((res) => {
        setFormInfo(res.data.result);
      })
      .catch((err) => {
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
      setFileName(fileInput.name);
    };
    reader.readAsDataURL(fileInput);
  };
  const onChangeHandler = (e) => {
    setFormInfo({
      ...formInfo,
      [e.target.name]: e.target.value,
      photo: photo,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/posts/edit/${id}`, formInfo)
      .then((res) => {
        if (res.data.error) {
          setFormInputError(res.data.error.errors);
        } else {
          history.push("/dashboard");
        }
      })
      .catch((err) => console.log("error in submitting post request", err));
  };

  const handleChange = (e) => {
    [e.target.value] = fileName.toString();
  };
  const onInputHandler = (e) => {
    setFormInfo({ ...formInfo, photo: photo });
    console.log("photo:photo ->", photo);
  };

  return (
    <Paper elevation={3} align="center" mx="auto">
      <Typography component="legend" variant="subtitle1" mt="2em">
        Edit or Cancel
      </Typography>
      <PostForm
        submitHandler={submitHandler}
        onChangeHandler={onChangeHandler}
        onChangeFileSelectHandler={onChangeFileSelectHandler}
        formInputError={formInputError}
        formInfo={formInfo}
        handleChange={handleChange}
        fileName={fileName}
        onInputHandler={onInputHandler}
        active={props.active}
      />
    </Paper>
  );
};

export default EditPost;
