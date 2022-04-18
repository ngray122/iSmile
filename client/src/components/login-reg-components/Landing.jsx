import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./login-reg-component-styles.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import LandingCarousel from "./LandingCarousel";
const Landing = () => {
  return (
    <div className="container">
      <div className="row container" id="landing-row-wrapper">
        <div className="container col s12">
          <h2 className="carousel-header"> iSmile</h2>
          <LandingCarousel />
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
