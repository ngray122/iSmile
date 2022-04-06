import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import PostForm from "./PostForm";
import FormControl from "@mui/material/FormControl";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const CreatePost = (props) => {
  let history = useHistory();
  let [formInputError, setFormInputError] = useState({});

  let [registeredUser, setRegisteredUSer] = useState({});

  let [name, setName] = useState("");
  let [text, setText] = useState("");
  let [url, setUrl] = useState("");
  let [photo, setPhoto] = useState("");

  const onChangeFileSelectHandler = (e) => {
    e.preventDefault();
    console.log("picture icon clicked");
    const fileInput = e.target.files[0];
    console.log(fileInput);
    const reader = new FileReader();
    let base64String;
    reader.onloadend = () => {
      base64String = reader.result.replace("data:", "").replace(/^.+,/, "");
      setPhoto(base64String);
      console.log("base64log -> " + base64String);
    };
    reader.readAsDataURL(fileInput);
  };

  // Creates new post for user
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submitHandler working");
    const formData = new FormData();
    formData.append("name", name);
    formData.append("text", text);
    formData.append("url", url);
    formData.append("photo", photo);
    axios
      .post("http://localhost:8000/api/posts/create", formData)
      .then((res) => {
        if (res.data.errors) {
          setFormInputError(res.data.errors);
        } else {
          history.push("/dashboard");
        }
      })
      .catch((err) => console.log("error in submitting post request", err));
  };

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
      <form encType="multipart/form-data" onSubmit={submitHandler}>
        <Paper align="center" variant="outlined" mx="auto" p={1}>
          <FormControl>
            {/* Form Starts */}
            <div className="input-field" sx={{ p: "5px" }}>
              {/* NAME INPUT */}
              <input
                id="name"
                value={name}
                // error
                onChange={(e) => setName(e.target.value)}
                type="text"
              />
              <label htmlFor="name">Title</label>
              <span
                className="helper-text"
                data-error="wrong"
                data-success="right"
              >
                {formInputError.name?.message}
              </span>
            </div>

            {/*  TEXT INPUT */}
            <div className="input-field" sx={{ p: "5px" }}>
              <textarea
                id="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="materialize-textarea"
              />
              <label htmlFor="text">What would you like to say?</label>
              <span
                className="helper-text"
                data-error="wrong"
                data-success="right"
              >
                {formInputError.text?.message}
              </span>
            </div>

            {/* URL INPUT */}
            <div className="input-field" sx={{ p: "5px" }}>
              <input
                id="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                type="url"
                // input="url"
              />
              <label htmlFor="url">Add link - optional</label>
              <span
                className="helper-text"
                data-error="wrong"
                data-success="right"
              >
                {formInputError.url?.message}
              </span>
            </div>
            {/* IMAGE UPLOAD */}
            <div className="file-field" sx={{ p: "5px" }}>
              <div className="btn">
                <i className="material-icons large prefix">photo_camera</i>

                <input
                  onChange={onChangeFileSelectHandler}
                  accept=".png, .jpg, .jpeg"
                  type="file"
                  id="photo"
                  name="photo"
                  // value={photo}
                  filename="photo"
                />
              </div>
            </div>
            <div className="file-path-wrapper">
              <input className="file-path validate" type="text" />
            </div>
            <span className="helper-text" data-error="wrong">
              {formInputError.photo?.message}
            </span>

            {/* Submit Button */}

            <div>
              <button
                className="btn waves-effect waves-light"
                type="submit"
                name="action"
                id="form-button"
              >
                Submit
                <i className="material-icons right">send</i>
              </button>
              <button className="btn waves-effect waves-light" id="form-button">
                <Link id="form-link" to={"/dashboard"}>
                  Cancel
                </Link>
              </button>
            </div>
          </FormControl>
        </Paper>
      </form>

      {/* <PostForm
        sx={{ bgcolor: "primary.light" }}
        elevation={3}
        onChange={onchangeFileSelectHandler}
        submitHandler={submitHandler}
        formInputError={formInputError}
        setName={setName}
        setText={setText}
        setUrl={setUrl}
        filename={setPhoto}
      ></PostForm> */}
    </Paper>
  );
};

export default CreatePost;
