// portfolio page
import React from "react";
import Thumbnail from '../components/Thumbnail'
import '../App.css'
 

// import hero, nav, footer etc. 
function Portfolio() {
    return (
      
        <div className="portfolioImage">
          <Thumbnail
          link=""
          image="./assets/planner.png"
          title="Daily Planner"
          />
          <Thumbnail
          link=""
          image="./assets/brewlove.png"
          title="Brewlove"
          />
           <Thumbnail
          link=""
          image="./assets/bookclub.png"
          title="Book Club"
          />
          <Thumbnail
          link=""
          image="./assets/pwdgen.png"
          title="Password Generator"
          />
          <Thumbnail
          link=""
          image="./assets/weather.png"
          title="Weather Dashboard"
          />
          <Thumbnail
          link=""
          image="./assets/codingquiz.png"
          title="Coding Quiz"
          />
          <Thumbnail
          link=""
          image="./assets/notetaker.png"
          title="Note Taker"
          />
          <Thumbnail
          link=""
          image="./assets/empdir.png"
          title="Employee Directory"
          />
         
        </div>
      
    );
  }
  
  export default Portfolio;