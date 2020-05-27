import React from "react";
import { Link } from 'react-router-dom';
import "./style.css";

function Thumbnail(props) {
    return (
        <div className="project">
                <div className="project-title">{props.title}</div>
            <Link to={props.link}>
                <div className="project-image">
                    <img src={props.image} alt="Project"/>
                </div>
            </Link>
        </div>
    )
    
}
export default Thumbnail;