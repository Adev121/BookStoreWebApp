import React from "react";
import Home from "./home/Home";
import Course from "./components/Course";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import Signup from "./components/Signup";
import Courses from "./Courses/Courses";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./Context/Authprovider";
function App() {
  const [authUser,setAuthUser]=useAuth();
  console.log(authUser);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/courses" element={authUser?<Courses/>:<Navigate to="/signup"/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
        <Toaster/>
      </BrowserRouter>
    </>
  );
}

export default App;
