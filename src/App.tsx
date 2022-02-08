import React from "react";
import "./App.scss";
import HomePage from "./pages/home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Services from "./pages/ourServices";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<Services/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
