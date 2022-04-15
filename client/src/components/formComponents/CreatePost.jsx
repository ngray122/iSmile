import React, { useCallback, useState, useRef } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import PostForm from "./PostForm";

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
  let [fileName, setFileName] = useState({});
  const hiddenFileInput = useRef(null);

  const onChangeFileSelectHandler = (e) => {
    let fileInput = e.target.files[0];
    const reader = new FileReader();
    let base64String;
    reader.onloadend = () => {
      base64String = reader.result.replace("data:", "").replace(/^.+,/, "");
      setPhoto(base64String);
    };
    reader.readAsDataURL(fileInput);
  };
  const handleClick = useCallback((e) => {
    let fileInput = e.target.files[0];
    let { name } = fileInput;
    console.log("fclicked", File.name);
    setFileName(fileInput.name);
    console.log("fclicked", fileInput.name);

    // return name;
  }, []);
  console.log(fileName);
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

  // const handleChange = (e) => {
  //   const fileUploaded = e.target.files[0];
  //   console.log(fileUploaded);
  //   props.onChangeFileSelectHandler(fileUploaded);
  // };
  return (
    <Paper
      sx={{ maxWidth: "750px", p: "30px" }}
      // elevation={3}s
      align="center"
      mx="auto"
      variant="outlined"
    >
      <Typography component="legend" variant="h6">
        What made you smile today, {registeredUser.firstName}?
      </Typography>
      <PostForm
        onChangeHandler={onChangeHandler}
        onChangeFileSelectHandler={onChangeFileSelectHandler}
        submitHandler={submitHandler}
        formInfo={formInfo}
        formInputError={formInputError}
        handleClick={handleClick}
        // fileNameOnchange={fileNameOnchange}
        hiddenFileInput={hiddenFileInput}
        // handleChange={handleChange}
      ></PostForm>
    </Paper>
  );
};

export default CreatePost;
