import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import { AboutMe } from "./Pages/AboutMe";
import { Home } from "./Pages/Home";
import { Projects } from "./Pages/Projects";
function App() {
  return (
    <div  className="App">
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/aboutMe" element={<AboutMe/>}/>
      </Routes>
      <div className="">
        <Navbar />
      </div>
    </div>
  );
}

export default App;
