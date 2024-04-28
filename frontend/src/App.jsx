import React from "react";
import Home from "./home/Home";
import Course from "./components/Course";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import Signup from "./components/Signup";
function App() {
  return (
    <>
      {/* <div>
      <Home/>
      <Course/>
    </div> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/course" element={<Course/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
