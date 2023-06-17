import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Error from "./pages/Error";
import AboutUs from "./pages/AboutUs";
import Apartment from "./pages/Apartment";

import "./styles/_index.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/logement/:id" element={<Apartment />} />
                <Route path="/apropos" element={<AboutUs />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);
