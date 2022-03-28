import Paper from "@mui/material/Paper";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
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
      <Paper align="center" variant="outlined" mx="auto" p={1} border="2">
        <FormControl>
          {/* Form Starts */}
          <div className="input-field" row={false} sx={{ p: "5px" }}>
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
              <span>Photo</span>
              <input
                className="photo"
                type="file"
                onChange={onchangeFileSelectHandler}
                id="photo"
                value=""
                filename="photo"
                accept=".png, .jpg, .jpeg"
              />
              {/* <PhotoCameraIcon></PhotoCameraIcon> */}
            </div>
            <div className="file-path-wrapper">
              <input className="file-path validate" type="text" />
            </div>
            <span class="helper-text" data-error="wrong" data-success="right">
              {formInputError.photo?.message}
            </span>
          </div>

          <Button type="submit" variant="contained">
            Submit
          </Button>
          <Link to={"/dashboard"} className="btn">
            Cancel
          </Link>
        </FormControl>
      </Paper>
    </form>
  );
};

export default PostForm;
