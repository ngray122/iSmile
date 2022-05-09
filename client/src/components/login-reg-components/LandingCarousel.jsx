import { useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";
import smile from "../../static/static-imgs/pexels-juan-pablo-serrano-arenas-967016.jpg";
import green from "../../static/static-imgs/pexels-pixabay-208147.jpg";
import stop from "../../static/static-imgs/pexels-pixabay-264196.jpg";
import cheese from "../../static/static-imgs/jacqueline-munguia-1pAwJiCD60c-unsplash.jpg";
import flower from "../../static/static-imgs/pexels-kat-smith-736842.jpg";
import yellow from "../../static/static-imgs/pexels-melissa-698899.jpg";
function LandingCarousel() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <div className="carousel-container">
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        autoplay
        forwardBtnProps={{
          style: {
            alignSelf: "center",
            border: "none",
            color: "#b6ffce",
            backgroundColor: "#6c5b7b",
            cursor: "pointer",
            fontSize: "50px",
            height: 30,
            lineHeight: 1,
            textAlign: "center",
            width: 30,
          },
          // children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          style: {
            alignSelf: "center",
            border: "none",
            color: "#b6ffce",
            backgroundColor: "#6c5b7b",

            cursor: "pointer",
            fontSize: "50px",
            height: 30,
            lineHeight: 1,
            textAlign: "center",
            width: 30,
          },
          // children: <span>{`<`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 3,
            itemsToScroll: 3,
            minWidth: 768,
          },
        ]}
        speed={50000}
        easing="linear"
      >
        <div sx={{ marginTop: "30px" }}>
          <img src={smile} style={{ width: 300, height: 300, margin: 5 }}></img>
        </div>
        <div>
          <img src={green} style={{ width: 300, height: 300, margin: 5 }}></img>
        </div>
        <div>
          <img src={stop} style={{ width: 300, height: 300, margin: 5 }}></img>
        </div>
        <div>
          <img
            src={cheese}
            style={{ width: 300, height: 300, margin: 5 }}
          ></img>
        </div>
        <div>
          <img
            src={flower}
            style={{ width: 300, height: 300, margin: 5 }}
          ></img>
        </div>
        <div>
          <img
            src={yellow}
            style={{ width: 300, height: 300, margin: 5 }}
          ></img>
        </div>
      </ReactSimplyCarousel>
    </div>
  );
}

export default LandingCarousel;
