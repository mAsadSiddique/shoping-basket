import React from "react";
import Header from "./Header/Header";
import Home from "./Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About/About";

function RouteComponent() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="about" element={<About/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default RouteComponent;
