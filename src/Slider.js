import React, { useEffect, useState } from "react";
import './slider.css';



import { sliderData } from "./SliderData";

const Slider = () => {
  const [index, setindex] = useState(0);
  const slide = sliderData[index];

  let forward = index + 1;
  let length = sliderData.length;
  let back = index - 1;

  const handleForward = () => {
    forward === length ? setindex(0) : setindex(forward);
  };
  const handleBackward = () => {
    back < 0 ? setindex(length - 1) : setindex(back);
  };

  useEffect(() => {
    const terminate = setTimeout(() => {
      handleForward();
    }, 2000);
    return () => clearTimeout(terminate);
  }, [index]);

  return (
    <>
    <div className="slider carousel.carousel-fade">
      {/* <p>{slide.id}</p> */}
      <img src={slide.image} className="image" alt="" />
      {/* <div className="slider-arrow"> */}
        {/* <span className="left" onClick={handleBackward}> */}
          {/* <FaArrowCircleLeft /> */}
        {/* </span> */}
        {/* <span  id="right" className="left"  onClick={handleForward}> */}
          {/* <FaArrowCircleRight /> */}
        {/* </span> */}
      {/* </div> */}
    
    </div>
    <div className="heading text-center mt-2 text-monospace">
     <h3>Our Products</h3>
     </div>
     <div className="hr"></div>
   
    </>
  );
};

export default Slider;
