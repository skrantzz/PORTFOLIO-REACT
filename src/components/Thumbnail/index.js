import React from "react";
import { Link } from 'react-router-dom';
import "./style.css";

function Thumbnail() {
    return (
        <div className="project">
            <Link to="">
                <div className="project-image">
                    <img src="" alt="Project"/>
                </div>
                <div className="project-title">""</div>
                <div className="project-category">""</div>
            </Link>
        </div>
    )
}

export default Thumbnail;