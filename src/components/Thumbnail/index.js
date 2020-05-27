import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Thumbnail(props) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
          <div className="card border-danger mb-3 align-items-center flip-card-front">
            <div className="card-body hvr-ripple-in hvr-wobble-skew">
              <div className="project-title">{props.title}</div>
              <Link to={props.link}>
                <div className="project-image">
                  <img src={props.image} alt="Project" />
                </div>
              </Link>
            </div>
          </div>
          <div className="card border-danger mb-3 align-items-center flip-card-back">
            <div className="card-body hvr-ripple-in hvr-wobble-skew">
              <div className="project-title">{props.title}</div>
              <Link to={props.link}>
                <div className="project-image">
                  <img src={props.image} alt="Project" />
                </div>
              </Link>
            </div>
          </div>
        </div>
    </div>
    
  );
}
export default Thumbnail;
