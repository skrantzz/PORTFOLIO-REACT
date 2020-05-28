import React from "react";
// import { Link } from 'react-router-dom';
import "./style.css";

function Thumbnail(props) {
    return (
            <div className="card mb-3 align-items-center">
      <div className="card-body hvr-outline-out">
                <div className="project-title">{props.title}</div>
            <a href={props.link}>
                <div className="project-image">
                    <img src={props.image} alt="Project"/>
                </div>
            </a>
            {console.log(props.link)}
        </div></div>
    )
    
}
export default Thumbnail;

