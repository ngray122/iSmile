import React from "react";
// import "bootstrap/dist/css/bootstrap.css";
import { Carousel } from "react-bootstrap";

import slide1 from "../../static/static-imgs/jacqueline-munguia-1pAwJiCD60c-unsplash.jpg";
import slide2 from "../../static/static-imgs/pexels-juan-pablo-serrano-arenas-967016.jpg";
import slide3 from "../../static/static-imgs/pexels-kat-smith-736842.jpg";
import slide4 from "../../static/static-imgs/pexels-pixabay-208147.jpg";
import slide5 from "../../static/static-imgs/pexels-pixabay-264196.jpg";
const CarouselLanding = () => {
  {
    console.log(slide1);
  }

  return (
    <>
      <img src={slide1} height={100} width={100} />
      <Carousel>
        <Carousel.Item>
          <img
            // className="d-block w-100"
            src={slide1}
            alt="First slide"
            // style={{ width: "40px", height: "40px" }}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=282c34"
            alt="Second slide"
            // active
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>
    </>
  );
};
export default CarouselLanding;
