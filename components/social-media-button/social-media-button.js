import React from "react";
import "./social-media-button.css"

const SciMediaButton = (props) =>{
   return(
    <div>
         <i className="fa fa-user-happy" style={{color:"white"}}></i>
         <a href={props.link} className="fa fa-facebook"></a>
    </div>
   
   )
 
}



export default SciMediaButton;