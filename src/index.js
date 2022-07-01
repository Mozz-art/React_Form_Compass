import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Success from "./pages/success/success";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  </BrowserRouter>
);
