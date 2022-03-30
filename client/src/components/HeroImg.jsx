import React from "react";
import imgs from "../static/static-imgs/jacqueline-munguia-1pAwJiCD60c-unsplash.jpg";

export const HeroImg = () => {
  return (
    <div className="container">
      <div className="hero-img-wrapper container">
        {" "}
        <img
          className="materialboxed responsive-img center"
          id="hero-img"
          height="400"
          width="400"
          src={imgs}
          alt=""
        />
      </div>
    </div>
  );
};
