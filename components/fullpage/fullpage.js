import React, { Component, useEffect } from "react";
import AwesomeSlider from "react-awesome-slider";
import {
  withNavigationHandlers,
  withNavigationContext
} from "react-awesome-slider/dist/navigation";
import { media } from "./media";
import './fullpage.css';

const Slider = withNavigationHandlers(AwesomeSlider);

export default withNavigationContext(() => {
  useEffect(() => {
    document.querySelector("body").classList.add("animated", "visible");
  }, [])
  const animation = `cubeAnimation`;
  return (
    <AwesomeSlider
      mobileTouch={false}
      animation={animation}
      infinite = {false}
      media={media}
    >
  
      </AwesomeSlider>
  );
});
