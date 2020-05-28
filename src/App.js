import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./components/FontAwesome"
import './App.css';
import Portfolio from "./pages/Portfolio"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Navbar from "./components/Navbar"
import Footer from "./components/footer";
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { instagram, twitter } from '@fortawesome/free-solid-svg-icons'

// library.add(fab, instagram, twitter)



// routes go here and import whatever elements i want to use for the whole site

function App() {
  return (
  
    <Router>
    <div>
      <Navbar />
        <Route exact path="/" component={Portfolio} />
        <Route exact path="/Portfolio" component={Portfolio} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        </div>
    <Footer/>
    </Router> 
  
  );
}

export default App;
