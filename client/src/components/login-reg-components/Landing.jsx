import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./login-reg-component-styles.css";
import smile from "../../static/static-imgs/pexels-juan-pablo-serrano-arenas-967016.jpg";
import green from "../../static/static-imgs/pexels-pixabay-208147.jpg";
import stop from "../../static/static-imgs/pexels-pixabay-264196.jpg";
import chhese from "../../static/static-imgs/pexels-pixabay-208147.jpg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

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
          <h2 className="carousel-header"> Header</h2>

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
      <div className="row container" id="login-reg-button-wrapper">
        <Link to="/login" className="waves-effect waves-light btn-large">
          Sign In
        </Link>
        <Link to="/register" className="waves-effect waves-light btn-large">
          Sign Up
        </Link>
      </div>
      <div className="row container " id="landing-row-wrapper">
        <div className="container col s4 ">
          <div className="row">
            <div className="col s12 m7">
              <div className="card-about">
                <div className="card-icon center">
                  <i className="large material-icons"> sentiment_satisfied</i>
                </div>
                <div className="card-content center">
                  <p>
                    I am a very simple card. I am good at containing small bits
                    of information. I am convenient because I require little
                    markup to use effectively.
                  </p>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
        <div className="container col s4">
          {" "}
          <div className="row">
            <div className="col s12 m7">
              <div className="card-about">
                <div className="card-icon center">
                  <i className=" large material-icons"> wb_sunny</i>
                </div>
                <div className="card-content center">
                  <p>
                    I am a very simple card. I am good at containing small bits
                    of information. I am convenient because I require little
                    markup to use effectively.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container col s4">
          <div className="row">
            <div className="col s12 m7">
              <div className="card-about">
                <div className="card-icon center">
                  <i className="large material-icons">
                    {" "}
                    sentiment_very_satisfied
                  </i>
                </div>
                <div className="card-content center">
                  <p>
                    I am a very simple card. I am good at containing small bits
                    of information. I am convenient because I require little
                    markup to use effectively.
                  </p>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Landing;
