import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Navbar from "./components/Navbar"
import './App.css';

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
    </Router> 
  );
}

export default App;
