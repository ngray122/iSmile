import React from "react";
import imgs from "../static/static-imgs/jacqueline-munguia-1pAwJiCD60c-unsplash.jpg";

export const HeroImg = () => {
  return (
    <div className="container" id="heroImg">
      <div className="row">
        <div className="">
          {" "}
          <img className="materialboxed" height="400" width="400" src={imgs} />
        </div>
      </div>
    </div>
  );
};
