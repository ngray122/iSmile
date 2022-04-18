import React from "react";
import Carousel from "react-bootstrap/Carousel";
import slide1 from "../../static/static-imgs/jacqueline-munguia-1pAwJiCD60c-unsplash.jpg";
import slide2 from "../../static/static-imgs/pexels-juan-pablo-serrano-arenas-967016.jpg";
import slide3 from "../../static/static-imgs/pexels-kat-smith-736842.jpg";
import slide4 from "../../static/static-imgs/pexels-pixabay-208147.jpg";
import slide5 from "../../static/static-imgs/pexels-pixabay-264196.jpg";
const LandingCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item style={{ width: 100, height: 100 }}>
        <img className="d-block" src={slide1} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      {/* <Carousel.Item>
        <img className="d-block" src={slide2} alt="Second slide" />

        <Carousel.Caption>
          <h3>Second slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block" src={slide3} alt="Third slide" />

        <Carousel.Caption>
          <h3>Third slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block" src={slide4} alt="4th slide" />

        <Carousel.Caption>
          <h3>Third slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slide5} alt="Fifth slide" />

        <Carousel.Caption>
          <h3>Third slide label</h3>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  );
};
export default LandingCarousel;
