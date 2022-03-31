import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import style from "./login-reg-component-styles.css";
import imgs from "/Users/Nicole/Desktop/projects/iSmile/client/src/static/static-imgs/jacqueline-munguia-1pAwJiCD60c-unsplash.jpg";

const Landing = (props) => {
  let history = useHistory();

  let [registeredUser, setRegisteredUSer] = useState({});

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

  return (
    <div className="container">
      <div className="row container">
        <div className="container col s12">
          <h1>About information here</h1>
        </div>
      </div>
      <div className="row container">
        <div className="container col s12">
          <h1 className="carousel-header">Carousel Header</h1>
          <div className="carousel">
            <a className="carousel-item" href="#one!">
              <img href="https://lorempixel.com/250/250/nature/1" />
            </a>
            <a className="carousel-item" href="#two!">
              <img href="https://lorempixel.com/250/250/nature/2" />
            </a>
            <a className="carousel-item" href="#three!">
              <img href="https://lorempixel.com/250/250/nature/3" />
            </a>
            <a className="carousel-item" href="#four!">
              <img href="https://lorempixel.com/250/250/nature/4" src={imgs} />
            </a>
            <a className="carousel-item" href="#five!">
              <img href="https://lorempixel.com/250/250/nature/5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
