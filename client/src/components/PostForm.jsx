import Paper from "@mui/material/Paper";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import { FormGroup, Input, TextField } from "@mui/material";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

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
    <>
      <NavBar />
      <form encType="multipart/form-data" onSubmit={submitHandler}>
        <Paper
          align="center"
          variant="outlined"
          mx="auto"
          sx={{ p: "20px" }}
          border="2"
        >
          <FormControl>
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
                //   name="name"
                //   helperText={formInputError.name?.message}
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
                //   name="text"
                onChange={(e) => setText(e.target.value)}
                label="Text Area"
                input="text"
                //   helperText={formInputError.url?.message}

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
                //   name="url"
                //   helperText={formInputError.url?.message}
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
            <Link to={"/dashboard"} className="btn">
              Cancel
            </Link>
          </FormControl>
        </Paper>
      </form>
    </>
  );
};

export default PostForm;
