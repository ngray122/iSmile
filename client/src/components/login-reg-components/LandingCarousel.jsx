import { useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";
import smile from "../../static/static-imgs/pexels-juan-pablo-serrano-arenas-967016.jpg";
import green from "../../static/static-imgs/pexels-pixabay-208147.jpg";
import stop from "../../static/static-imgs/pexels-pixabay-264196.jpg";
import chhese from "../../static/static-imgs/pexels-pixabay-208147.jpg";
function LandingCarousel() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <div>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: "center",
            background: "black",
            border: "none",
            borderRadius: "50%",
            color: "white",
            cursor: "pointer",
            fontSize: "20px",
            height: 30,
            lineHeight: 1,
            textAlign: "center",
            width: 30,
          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: "center",
            background: "black",
            border: "none",
            borderRadius: "50%",
            color: "white",
            cursor: "pointer",
            fontSize: "20px",
            height: 30,
            lineHeight: 1,
            textAlign: "center",
            width: 30,
          },
          children: <span>{`<`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 3,
            itemsToScroll: 2,
            minWidth: 768,
          },
        ]}
        speed={400}
        easing="linear"
      >
        {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
        <div style={{ width: 300, height: 300 }}>
          <img></img>
        </div>
        <div style={{ width: 300, height: 300, background: "#065535" }}>
          slide 1
        </div>
        <div style={{ width: 300, height: 300, background: "#000000" }}>
          slide 2
        </div>
        <div style={{ width: 300, height: 300, background: "#133337" }}>
          slide 3
        </div>
        <div style={{ width: 300, height: 300, background: "#ffc0cb" }}>
          slide 4
        </div>
        <div style={{ width: 300, height: 300, background: "#ffffff" }}>
          slide 5
        </div>
        <div style={{ width: 300, height: 300, background: "#ffe4e1" }}>
          slide 6
        </div>
        <div style={{ width: 300, height: 300, background: "#008080" }}>
          slide 7
        </div>
        <div style={{ width: 300, height: 300, background: "#ff0000" }}>
          slide 8
        </div>
        <div style={{ width: 300, height: 300, background: "#e6e6fa" }}>
          slide 9
        </div>
      </ReactSimplyCarousel>
    </div>
  );
}

export default LandingCarousel;
