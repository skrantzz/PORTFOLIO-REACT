import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import Navbar from "./components/Navbar"
import './App.css';

// routes go here and import whatever elements i want to use for the whole site

function App() {
  return (
    <Router>
    <div>
      <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />

        </div>
    </Router> 
  );
}

export default App;
