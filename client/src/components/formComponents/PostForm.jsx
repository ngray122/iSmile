import React, { useRef } from "react";

import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styles from "../../static/css/style.css";

const PostForm = (props) => {
  let hasActiveClass = props.active ? "active" : null;

  return (
    <form
      encType="multipart/form-data"
      className="container "
      id="post-form-input"
      onSubmit={props.submitHandler}
      autoComplete="off"
    >
      {/* Form Starts */}
      <div className="input-field " id="post-input">
        {/* NAME INPUT */}
        <input
          id="name"
          value={props.formInfo.name}
          onChange={props.onChangeHandler}
          type="text"
          name="name"
        />
        <label htmlFor="name" className={hasActiveClass}>
          Title
        </label>
        <span className="helper-text" data-error="wrong" data-success="right">
          {props.formInputError.name?.message}
        </span>
      </div>

      {/*  TEXT INPUT */}
      <div className="input-field" id="post-input">
        <textarea
          id="text"
          type="text"
          value={props.formInfo.text}
          onChange={props.onChangeHandler}
          className="materialize-textarea"
          name="text"
        />
        <label htmlFor="text post-input" className={hasActiveClass}>
          What would you like to say?
        </label>
        <span className="helper-text" data-error="wrong">
          {props.formInputError.text?.message}
        </span>
      </div>

      {/* URL INPUT */}
      <div className="input-field" id="post-input" sx={{ p: "5px" }}>
        <input
          id="url"
          value={props.formInfo.url}
          onChange={props.onChangeHandler}
          type="url"
          name="url"
        />
        {/* {console.log(hasActiveClass)} */}
        <label htmlFor="url post-input" className={hasActiveClass}>
          Add link - optional
        </label>
        <span className="helper-text" data-error="wrong">
          {props.formInputError.url?.message}
        </span>
      </div>
      {/* IMAGE UPLOAD */}
      <div className="file-field" sx={{ p: "5px" }}>
        <div className="btn btn-field ">
          <i className="material-icons large prefix">photo_camera</i>
          <input
            onChange={props.onChangeFileSelectHandler}
            accept=".png, .jpg, .jpeg"
            type="file"
            id="photo"
            name="photo"
            value=""
          />
        </div>
        <div className="file-path-wrapper " htmlFor="photo">
          <input
            className="file-path validate"
            type="text"
            placeholder={"Upload photo"}
            onChange={props.handleChange}
            value={props.fileName}
          />
          {/* {console.log(typeof props.fileName)} */}
        </div>
      </div>

      <span className="helper-text" data-error="wrong">
        {props.formInputError.photo?.message}
      </span>

      {/* Submit Button */}

      <div className="btn-wrapper">
        <button
          className=" form-button btn waves-effect waves-light"
          type="submit"
          name="action"
          onClick={props.onInputHandler}
        >
          Submit
          <i className="material-icons right">send</i>
        </button>
        <button className="btn waves-effect waves-light form-button">
          <Link id="form-link" to={"/dashboard"}>
            Cancel
          </Link>
        </button>
      </div>
    </form>
  );
};

export default PostForm;
