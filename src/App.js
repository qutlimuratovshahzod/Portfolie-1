import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Projects } from "./Pages/Projects";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/projects" index={<Projects/>}/>
      </Routes>
    </div>
  );
}

export default App;
