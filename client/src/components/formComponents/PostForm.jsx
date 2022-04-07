import Paper from "@mui/material/Paper";
import FormControl from "@mui/material/FormControl";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styles from "./form-component-styles.css";

const PostForm = (props) => {
  console.log("read here ->", props);

  const {
    submitHandler,
    onChangeFileSelectHandler,
    formInputError,
    setName,
    text,
    setText,
    name,
    url,
    setUrl,
  } = props;

  return <></>;
};

export default PostForm;
