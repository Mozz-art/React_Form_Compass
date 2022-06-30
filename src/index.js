import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Success from "./pages/success/success";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Routes>
        <Route path='/' exact={true} component={App} />
        <Route path="/Home" element={<Home />} />
        <Route path="/success" element={<Success />} />
        </Routes>
    </BrowserRouter>,
);
