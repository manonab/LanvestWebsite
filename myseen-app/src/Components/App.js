import React from 'react';

import './App.css'
import Navbar from './NavBar/Navbar';
import Home from "./Home/Home"
import Footer from "./Footer/Footer"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Home />
        <Footer />
      </Router>
      </>
  );
}

export default App;
