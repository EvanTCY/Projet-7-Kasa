import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components pages
import Home from "./pages/Home";
import Error from "./pages/Error";
import AboutUs from "./pages/AboutUs";
import Apartment from "./pages/Apartment";

// components
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";

// scss
import "./styles/_main.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Router>
            <Header />
            <Main>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/logement/:id" element={<Apartment />} />
                    <Route path="/apropos" element={<AboutUs />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </Main>
            <Footer />
        </Router>
    </React.StrictMode>
);
