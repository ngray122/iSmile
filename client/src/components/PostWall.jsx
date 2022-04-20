import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

import CardPost from "./CardPost";

const PostWall = () => {
  return <CardPost elevation={6}></CardPost>;
};

export default PostWall;
