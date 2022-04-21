import React from 'react';

import './App.css'
import Navbar from './NavBar/Navbar';
import Home from "./Home/Home";
import  Contact from "./Footer/Contact";
import Footer from "./Footer/Footer";
import Legacy from "./Footer/legacy";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
          path="/"
          element={<Home />}
          />
            <Route
            path='/contact'
            element={<Contact />}
            />
            <Route
                path='/legacy'
                element={<Legacy />}
            />
        </Routes>
        <Footer />
      </Router>
      </>
  );
}

export default App;
