// portfolio page
import React from "react";
import Thumbnail from "../components/Thumbnail";
import "../App.css";
import projectData from "../utils/projects.json";

// import hero, nav, footer etc.
function Portfolio() {
  return (
    <>
      <div className="container techStack">
        <h2>TECH STACK:</h2>
        MongoDB, Express.js, React, Node, MySQL, HTML/CSS, JavaScript, Material
        UI, Git, Heroku
      </div>
      <div className="container">
        <div className="row mt-4">
          {projectData.map((data) => (
            <div className="col-md-3 mt-3 mb-3">
              <Thumbnail
                link={data.link}
                image={data.image}
                title={data.title}
                onClick={data.link}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Portfolio;
