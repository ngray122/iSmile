import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import FormLabel from "@mui/material/FormLabel";
import { FormGroup, Input, TextField } from "@mui/material";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";

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

  // const changeHandler = (e) => {
  //     e.preventDefault();
  //     if (e.target.type == 'file') {
  //         setUserFormInput({
  //             ...userFormInput,
  //             [e.target.photo]: e.target.file,
  //         })
  //     } else {
  //         console.log([e.target.name])
  //         setUserFormInput({
  //             [e.target.name]: e.target.value,
  //             [e.target.text]: e.target.value,
  //             [e.target.url]: e.target.value
  //         })
  //     }
  // }

  const onchangeFileSelectHandler = (e) => {
    e.preventDefault();
    const fileInput = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result
        .replace("data:", "")
        .replace(/^.+,/, "");
      console.log("base64log -> " + base64String);
      console.log("fileInput log -> " + fileInput);
    };
    reader.readAsDataURL(fileInput);
    setPhoto(fileInput);
  };

  // Creates new post for user
  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("text", text);
    formData.append("url", url);
    formData.append("photo", photo);

    console.log("name log ->" + name);
    console.log("text log ->" + text);
    console.log("photo log ->" + photo);
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
      <form encType="multipart/form-data" onSubmit={submitHandler}>
        <Paper
          align="center"
          variant="outlined"
          // elevation=''
          mx="auto"
          sx={{ p: "20px" }}
          border="2"
          // sx={{bgcolor:'primary.light'}}
        >
          <FormControl>
            <Typography component="legend" variant="h6">
              What made you smile today, {registeredUser.firstName}?
            </Typography>

            {/* Form Starts */}
            <FormGroup row={false} sx={{ p: "5px" }}>
              {/* NAME INPUT */}
              <TextField
                variant="standard"
                id="component-outlined"
                value={name}
                // error
                onChange={(e) => setName(e.target.value)}
                label="Name of your post"
                input="name"
                name="name"
                helperText={formInputError.name?.message}
              />
            </FormGroup>

            {/*  TEXT INPUT */}
            <FormGroup sx={{ p: "5px" }}>
              <TextField
                variant="standard"
                // type='email'
                id="component-outlined"
                value={text}
                maxRows="6"
                name="text"
                onChange={(e) => setText(e.target.value)}
                label="Text Area"
                input="name"
                helperText={formInputError.url?.message}

                // errorText={formInputError.text?.message}
              />
            </FormGroup>

            {/* URL INPUT */}
            <FormGroup row={false} sx={{ p: "5px" }}>
              <TextField
                variant="standard"
                // error
                id="component-outlined"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                label="Add Link (optional)"
                input="url"
                name="url"
                helperText={formInputError.url?.message}
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
                value=""
                label="Add photo"
                input="file"
                filename="photo"
                accept=".png, .jpg, .jpeg"
                // error
                // helperText={formInputError.photo?.message}xs
              />
              {/* <PhotoCameraIcon></PhotoCameraIcon> */}
            </FormGroup>

            <Button
              // onClick={() => console.log("Button clicked")}
              type="submit"
              // component={} to="/"
              variant="contained"
            >
              Submit
            </Button>
          </FormControl>
        </Paper>
      </form>
    </Box>
  );
};

export default CreatePost;
