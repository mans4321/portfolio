import React from "react";
import "react-awesome-button/dist/themes/theme-c137.css";
import About from "../../content/about/about";
import Resume from "../../content/resume/resume";
import Contact from "../../content/contact/contact";
import Portfolio from "../../content/portfolio/portfolio"; 
import "./fullpage.css";


export const media = [
  {
    goto: "",
    children: <About />
  },
  {
    goto: "portfolio",
    children: <Portfolio /> 
  },
  {
    goto: "contact",
    children: <Contact />
  },
  {
    goto: "resume",
    children: <Resume />
  }
];