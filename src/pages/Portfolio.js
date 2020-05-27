// portfolio page
import React from "react";
import Thumbnail from '../components/Thumbnail'
import '../App.css'


// import hero, nav, footer etc. 
function Portfolio() {
  return (
          <div className="portfolioImage">
    <div className="container">
      <div className="row">
        <div className="col-md">
            <Thumbnail
              link=""
              image="./assets/planner.png"
              title="Daily Planner"
            />
            </div>
          <div className="col-md">
            <Thumbnail
              link=""
              image="./assets/brewlove.png"
              title="Brewlove"
            />
            </div>
          <div className="col-md">
            <Thumbnail
              link=""
              image="./assets/bookclub.png"
              title="Book Club"
            />
            </div>
              <Thumbnail
              link=""
              image="./assets/pwdgen.png"
              title="Password Generator"
        />
      </div>
    </div>
      <div className="row">
      <div className="col-md">
        <Thumbnail
          link=""
          image="./assets/weather.png"
          title="Weather Dashboard"
        /></div>
        <div className="col-md">
        <Thumbnail
          link=""
          image="./assets/codingquiz.png"
          title="Coding Quiz"
        /></div>
        <div className="col-md">
        <Thumbnail
          link=""
          image="./assets/notetaker.png"
          title="Note Taker"
        /></div>
        <div className="col-md">
        <Thumbnail
          link=""
          image="./assets/empdir.png"
          title="Employee Directory"
        /></div>
      </div>


    </div>

  );
}

export default Portfolio;