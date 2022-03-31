import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./login-reg-component-styles.css";
import smile from "/Users/Nicole/Desktop/projects/iSmile/client/src/static/static-imgs/pexels-juan-pablo-serrano-arenas-967016.jpg";
import green from "/Users/Nicole/Desktop/projects/iSmile/client/src/static/static-imgs/pexels-pixabay-208147.jpg";
import stop from "/Users/Nicole/Desktop/projects/iSmile/client/src/static/static-imgs/pexels-pixabay-264196.jpg";
import chhese from "/Users/Nicole/Desktop/projects/iSmile/client/src/static/static-imgs/pexels-pixabay-208147.jpg";

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
      <div className="row container" id="landing-row-wrapper">
        <div className="container col s12">
          <h1 className="carousel-header"> Header</h1>

          <div className="carousel container" id="">
            <a className="carousel-item" href="#one!">
              <img src={green} className="carousel-img" />
            </a>
            <a className="carousel-item" href="#two!">
              <img src={chhese} className="carousel-img" />
            </a>
            <a className="carousel-item" href="#three!">
              <img src={stop} className="carousel-img" />
            </a>
            <a className="carousel-item" href="#four!">
              <img src={smile} className="carousel-img" />
            </a>
            <a className="carousel-item" href="#five!">
              <img href="#five!" className="carousel-img" src={chhese} />
            </a>
          </div>
        </div>
      </div>
      <div className="row container " id="landing-row-wrapper">
        <div class="container col s4 ">
          <h4 className="center-align">about</h4>
        </div>
        <div class="container col s4">
          <h4 className="center-align">about</h4>
        </div>
        <div class="container col s4">
          <h4 className="center-align">about</h4>
        </div>
      </div>
    </div>
  );
};

export default Landing;
