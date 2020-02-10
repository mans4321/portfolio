import React from "react";
import { withNavigationContext } from "react-awesome-slider/dist/navigation";
import Select from "../select/select";
import "./content.scss";

const Content = withNavigationContext(({main}) => {
  return (
    <div className="content">
      <div className="content__main">{main}</div>
    </div>
  );
});

export default Content;
