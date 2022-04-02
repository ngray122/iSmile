import Paper from "@mui/material/Paper";
import FormControl from "@mui/material/FormControl";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styles from "./form-component-styles.css";

const PostForm = (props) => {
  const {
    submitHandler,
    onchangeFileSelectHandler,
    formInputError,
    setName,
    text,
    setText,
    name,
    url,
    setUrl,
  } = props;

  return (
    <form encType="multipart/form-data" onSubmit={submitHandler}>
      <Paper variant="outlined" mx="auto">
        <FormControl>
          {/* Form Starts */}
          <div className="input-field">
            {/* NAME INPUT */}
            <input
              id="name"
              value={name}
              // error
              onChange={(e) => setName(e.target.value)}
              type="text"
            />
            <label for="name">Title</label>
            <span class="helper-text" data-error="wrong" data-success="right">
              {formInputError.name?.message}
            </span>
          </div>

          {/*  TEXT INPUT */}
          <div className="input-field" sx={{ p: "5px" }}>
            <textarea
              id="text"
              value={text}
              maxRows="6"
              onChange={(e) => setText(e.target.value)}
              className="materialize-textarea"
            />
            <label for="text">What would you like to say?</label>
            <span class="helper-text" data-error="wrong" data-success="right">
              {formInputError.text?.message}
            </span>
          </div>

          {/* URL INPUT */}
          <div className="input-field" row={false} sx={{ p: "5px" }}>
            <input
              id="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              type="url"
              // input="url"
            />
            <label for="url">Add link - optional</label>
            <span class="helper-text" data-error="wrong" data-success="right">
              {formInputError.url?.message}
            </span>
          </div>

          {/* IMAGE UPLOAD */}
          <div className="file-field input-field" row={false} sx={{ p: "5px" }}>
            <div className="btn">
              <i className="material-icons large prefix">photo_camera</i>

              <input
                className="photo"
                type="file"
                onChange={onchangeFileSelectHandler}
                id="photo"
                value=""
                filename="photo"
                accept=".png, .jpg, .jpeg"
              />
            </div>
            <div className="file-path-wrapper">
              <input className="file-path validate" type="text" />
            </div>
            <span className="helper-text" data-error="wrong">
              {formInputError.photo?.message}
            </span>
          </div>
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
