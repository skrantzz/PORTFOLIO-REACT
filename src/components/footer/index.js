import React from "react";
import logo from './logo.png'
import "./style.css"

// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Footer() {
        return (


              <div className="footer row justify-content-center">
                <div className="col-md-5 text-center">
                    
                  <a href="https://github.com/skrantzz">GitHub</a>| 
                  <a href="https://www.linkedin.com/in/sydney-krantz/">LinkedIn</a>| 
                  <a href="https://www.instagram.com/seeeyudddd/">IG</a>|
                  <a href="skrantz.com">Photo</a>
                  <br/><br/>
                  <img className="footerLogo" src={logo}/>
                </div>
              </div>
           
          );
        }

export default Footer;