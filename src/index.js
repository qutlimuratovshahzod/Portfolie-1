import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css"
import { BrowserRouter } from "react-router-dom";

const app = (
  <BrowserRouter>
  <React.StrictMode>
    <App/>
  </React.StrictMode>
  </BrowserRouter>
)


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(app)


