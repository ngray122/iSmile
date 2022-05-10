import React from "react";

import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styles from "../../static/css/style.css";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import LandingCarousel from "./LandingCarousel";

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
              <LandingCarousel />
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
              <h1 className="carousel-header-rsp"> iSmile</h1>
            </div>
          </div>

          <div className="row container ">
            <div className="container col s4">
              <div className="row">
                <LandingCarousel />
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
