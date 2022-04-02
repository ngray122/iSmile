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
import NavBar from "../NavBar";
import Profile from "../Profile";
import styles from "./form-component-styles.css";

const EditPost = (props) => {
  let history = useHistory();
  let [formInputError, setFormInputError] = useState({});
  let [registeredUser, setRegisteredUSer] = useState({});
  let [onePost, setOnePost] = useState({});
  let [photo, setPhoto] = useState("");
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
    <>
      <NavBar />
      <div className="row">
        <div className="container create-post-wrapper">
          <div className="col s6">
            <Profile />
          </div>
          <div className="col s6">
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
                <Paper align="center" variant="outlined" mx="auto" p={1}>
                  <FormControl>
                    {/* Form Starts */}
                    <div className="input-field" row={false} sx={{ p: "5px" }}>
                      {/* NAME INPUT */}
                      <input
                        value={onePost.name}
                        // error
                        onChange={onChangeHandler}
                        label="Name of your post"
                        input="name"
                        name="name"
                      />
                      <label for="name"></label>
                      <span
                        class="helper-text"
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
                        value={onePost.text}
                        maxRows="6"
                        name="text"
                        onChange={onChangeHandler}
                        className="materialize-textarea"
                      />
                      <label for="text"></label>
                      <span
                        class="helper-text"
                        data-error="wrong"
                        data-success="right"
                      >
                        {formInputError.text?.message}
                      </span>
                    </div>

                    {/* URL INPUT */}
                    <div className="input-field" row={false} sx={{ p: "5px" }}>
                      <input
                        id="url"
                        value={onePost.url}
                        onChange={onChangeHandler}
                        name="url"
                      />
                      <label for="url"></label>
                      <span
                        class="helper-text"
                        data-error="wrong"
                        data-success="right"
                      >
                        {formInputError.url?.message}
                      </span>
                    </div>

                    {/* IMAGE UPLOAD */}
                    <div
                      className="file-field input-field"
                      row={false}
                      sx={{ p: "5px" }}
                    >
                      <div className="btn">
                        <i className="material-icons large prefix">
                          photo_camera
                        </i>
                        <input
                          className="photo"
                          type="file"
                          onChange={onchangeFileSelectHandler}
                          id="photo"
                          value=""
                          filename="photo"
                          accept=".png, .jpg, .jpeg"
                          name="photo"
                        />
                      </div>

                      <div className="file-path-wrapper">
                        <input className="file-path validate" type="text" />
                      </div>
                      <span className="helper-text" data-error="wrong">
                        {formInputError.photo?.message}
                      </span>
                    </div>
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
                      <button
                        className="btn waves-effect waves-light"
                        id="form-button"
                      >
                        <Link id="form-link" to={"/dashboard"}>
                          Cancel
                        </Link>
                      </button>
                    </div>
                  </FormControl>
                </Paper>
              </form>
            </Paper>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditPost;
