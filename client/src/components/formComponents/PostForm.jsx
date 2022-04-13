import React, { useState } from "react";

import Paper from "@mui/material/Paper";
import FormControl from "@mui/material/FormControl";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styles from "./form-component-styles.css";

const PostForm = (props) => {
  return (
    <form encType="multipart/form-data" onSubmit={props.submitHandler}>
      <Paper align="center" variant="outlined" mx="auto" p={1}>
        <FormControl>
          {/* Form Starts */}
          <div className="input-field" sx={{ p: "5px" }}>
            {/* NAME INPUT */}
            <input
              id="name"
              value={props.formInfo.name}
              onChange={props.onChangeHandler}
              type="text"
              name="name"
            />
            <label htmlFor="name">Title</label>
            <span
              className="helper-text"
              data-error="wrong"
              data-success="right"
            >
              {props.formInputError.name?.message}
            </span>
          </div>

          {/*  TEXT INPUT */}
          <div className="input-field" sx={{ p: "5px" }}>
            <textarea
              id="text"
              value={props.formInfo.text}
              onChange={props.onChangeHandler}
              className="materialize-textarea"
              name="text"
            />
            <label htmlFor="text">What would you like to say?</label>
            <span className="helper-text" data-error="wrong">
              {props.formInputError.text?.message}
            </span>
          </div>

          {/* URL INPUT */}
          <div className="input-field" sx={{ p: "5px" }}>
            <input
              id="url"
              value={props.formInfo.url}
              onChange={props.onChangeHandler}
              type="url"
              name="url"
            />
            <label htmlFor="url">Add link - optional</label>
            <span className="helper-text" data-error="wrong">
              {props.formInputError.url?.message}
            </span>
          </div>
          {/* IMAGE UPLOAD */}
          <div className="file-field" sx={{ p: "5px" }}>
            <div className="btn">
              <i className="material-icons large prefix">photo_camera</i>

              <input
                onChange={props.onChangeFileSelectHandler}
                accept=".png, .jpg, .jpeg"
                type="file"
                id="photo"
                name="photo"
                value=""
                // filename="photo"
                // value=""
              />
            </div>
            <div className="file-path-wrapper " htmlFor="photo">
              <input
                className="file-path validate"
                type="text"
                placeholder="Upload image"
              />
            </div>
          </div>

          <span className="helper-text" data-error="wrong">
            {props.formInputError.photo?.message}
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
  );
};

export default PostForm;
