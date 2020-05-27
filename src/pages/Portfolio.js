// portfolio page
import React from "react";
import Thumbnail from "../components/Thumbnail";
import "../App.css";
import projectData from "../utils/projects.json"

// import hero, nav, footer etc.
function Portfolio() {
  return (
    <>
    <div className='container'>
      <div className="row mt-4">
        {projectData.map(a=> <div className="col-md-3 mt-3 mb-3">
            <Thumbnail
              link={a.link}
              image={a.image}
              title={a.title}
            />
        </div>)}
       
        {/* <div className="col-md-3">

            <Thumbnail link="" image="./assets/brewlove.png" title="Brewlove" />
          </div>
        <div className="col-md-3">

            <Thumbnail
              link=""
              image="./assets/bookclub.png"
              title="Book Club"
            />
        </div>
        <div className="col-md-3">

            <Thumbnail
              link=""
              image="./assets/pwdgen.png"
              title="Password Generator"
            />
          </div>
        <div className="col-md-3">

            <Thumbnail
              link=""
              image="./assets/weather.png"
              title="Weather Dashboard"
            />
          </div>
        <div className="col-md-3">

            <Thumbnail
              link=""
              image="./assets/codingquiz.png"
              title="Coding Quiz"
            />
          </div>
        <div className="col-md-3">

            <Thumbnail
              link=""
              image="./assets/notetaker.png"
              title="Note Taker"
            />
          </div>
        <div className="col-md-3">

            <Thumbnail
              link=""
              image="./assets/empdir.png"
              title="Employee Directory"
            />
          </div>*/}
          </div> 
          </div>
    </>
  );
}

export default Portfolio;
