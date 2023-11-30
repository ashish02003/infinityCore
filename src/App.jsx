import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
// import Swipper from "./components/Swipper";
import Footer from "./components/Footer";




const App = () => {

  return (
    <>
      <BrowserRouter>
        <Navbar />
       
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/signup" element={<Signup/>} />

        </Routes>
    <Footer/>
      </BrowserRouter>
    </>
  );
};

export default App;
