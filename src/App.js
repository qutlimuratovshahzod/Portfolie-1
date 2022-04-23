import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Projects } from "./Pages/Projects";
function App() {
  return (
    <div style={{background:" rgb(15, 15, 30)"}} className="App">
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/projects" element={<Projects/>}/>
      </Routes>
    </div>
  );
}

export default App;
