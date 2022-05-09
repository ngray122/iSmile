import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import smile from "../../static/static-imgs/pexels-juan-pablo-serrano-arenas-967016.jpg";
import green from "../../static/static-imgs/pexels-pixabay-208147.jpg";
import stop from "../../static/static-imgs/pexels-pixabay-264196.jpg";
import chhese from "../../static/static-imgs/pexels-pixabay-208147.jpg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styles from "../../static/css/style.css";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Landing = (props) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div className="container">
      {!matches ? (
        <>
          <div className="row " id="landing-row-wrapper">
            <div className="landing-button-wrapper">
              <h1 className="carousel-header"> iSmile</h1>
              <Link
                to="/login"
                className="large btn waves-light center form-button"
              >
                Sign In
              </Link>
              <Link
                to="/register"
                className="large btn waves-light center form-button"
              >
                Sign Up
              </Link>
            </div>
            <div className="container col s12">
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

          <div className="row container ">
            <div className="container col s4 ">
              <div className="row">
                <div className="col s12 m7">
                  <div className="card-about">
                    <div className="card-icon center">
                      <i className="large material-icons">
                        {" "}
                        sentiment_satisfied
                      </i>
                    </div>
                    <div className="card-content center">
                      <p>
                        Smiling can actually help us live longer. People who
                        smile more often are generally happier and, since
                        smiling decreases blood pressure and releases
                        endorphins, it’s a great way to boost health and protect
                        your golden years
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
                        There are a few human gestures that cross language
                        barriers around the world and smiling is one of them. No
                        matter where you are on the globe, smiling is recognized
                        as a universal display of happiness and good nature
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
                        If you’re having a bad day, force yourself to smile.
                        Research suggests the act of smiling can actually trick
                        the brain into feeling happier. While smiling doesn’t
                        fix all problems, it certainly has the power to make us
                        feel just a little better at any given moment
                      </p>
                    </div>
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="row container">
            <div className="container col s12">
              <div className="carousel container">
                <h1 className="carousel-header-rsp"> iSmile</h1>

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

          <div className="row container ">
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
                        Smiling has many benefits, not the least of which is
                        that smiling can actually help us live longer. People
                        who smile more often are generally happier and, since
                        smiling decreases blood pressure and releases
                        endorphins, it’s a great way to boost health and protect
                        your golden years
                      </p>
                    </div>
                  </div>
                </div>
              </div>{" "}
            </div>
            <div className="row container" id="login-reg-button-wrapper">
              <Link
                to="/login"
                className="large btn waves-light center form-button"
              >
                Sign In
              </Link>
              <Link
                to="/register"
                className="large btn waves-light center form-button"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Landing;
