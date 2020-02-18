import React, { useRef } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import {
  withNavigationHandlers,
  withNavigationContext
} from "react-awesome-slider/dist/navigation";
import { media } from "./media";
import Startup from "../startup/startup";
import './fullpage.css';


const Slider = withNavigationHandlers(AwesomeSlider);

export default withNavigationContext(() => {
  let isFirstLoad = useRef(true);
  const animation = `cubeAnimation`;

  return (
    <Slider
      className={"main__Slider"}
      startupScreen={<Startup />}
      startupDelay={275}
      animation={animation}
      infinite = {true}
      onTransitionEnd={() => {
        // HANDLE THE PAGE ELEMENTS ANIMATION ON FIRST TRANSITION END
        if (isFirstLoad.current === true) {// bring the nav 
          document.querySelector("body").classList.add("animated", "visible");
          isFirstLoad = useRef(false);
        }
      }}
      media={media}
    />
  );
});
