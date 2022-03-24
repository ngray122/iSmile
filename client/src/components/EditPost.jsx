import React, { useEffect, useState } from "react";
import axios from "axios";
import PostForm from "./PostForm";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";

const EditPost = (props) => {
  let history = useHistory();
  let [formInputError, setFormInputError] = useState({});

  let [registeredUser, setRegisteredUSer] = useState({});

  let [onePost, setOnePost] = useState({});

  let { id } = useParams();

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8000/api/user/getone", { withCredentials: true })
  //     .then((res) => {
  //       // console.log("RESULT on load, GETONE registered user => ", res)
  //       if (res.data) {
  //         setRegisteredUSer(res.data);
  //       }
  //     })
  //     .catch((err) => {
  //       history.push("/");
  //       console.log("ERR WHEN GETTING LOGGED IN USER", err);
  //     });
  // }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/posts/getone/${id}`)
      .then((res) => {
        setOnePost(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        history.push("/");
        console.log("err with get one post in Edit", err);
      });
  }, []);
  //   const onchangeFileSelectHandler = (e) => {
  //     e.preventDefault();
  //     const fileInput = e.target.files[0];
  //     const reader = new FileReader();
  //     let base64String;
  //     reader.onloadend = () => {
  //       base64String = reader.result.replace("data:", "").replace(/^.+,/, "");
  //       // console.log("fileInput log -> " + fileInput);
  //       setPhoto(base64String);
  //       console.log("base64log -> " + base64String);
  //     };
  //     reader.readAsDataURL(fileInput);
  //   };

  // Creates new post for user
  //   const submitHandler = (e) => {
  //     e.preventDefault();
  //     const formData = new FormData();
  //     formData.append("name", name);
  //     formData.append("text", text);
  //     formData.append("url", url);
  //     formData.append("photo", photo);
  //     axios
  //       .put(`http://localhost:8000/api/posts/edit/${id}`, onePost)
  //       .then((res) => {
  //         console.log("CREATE POST ==>", res);
  //         if (res.data.errors) {
  //           setFormInputError(res.data.errors);
  //         } else {
  //           history.push("/dashboard");
  //         }
  //       })
  //       .catch((err) => console.log("error in submitting post request", err));
  //   };

  return (
    <div>
      <PostForm
      // onchangeFileSelectHandler={onchangeFileSelectHandler}
      // submitHandler={submitHandler}
      // formInputError={formInputError}
      // setName.value={onePost.name}
      // setText={setText}
      // name={name}
      // text={text}
      // url={url}
      // setUrl={setUrl}
      ></PostForm>
    </div>
  );
};

export default EditPost;
