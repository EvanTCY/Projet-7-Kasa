import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";

function Nav() {
    const location = useLocation();
    const homePath = "/";
    const aboutPath = "/apropos";
    const [homeLinkStyle, setHomeLinkStyle] = useState({});
    const [aboutLinkStyle, setAboutLinkStyle] = useState({});

    useEffect(() => {
        if (location.pathname === homePath) {
            setHomeLinkStyle({ textDecoration: "underline" });
            setAboutLinkStyle({});
        } else if (location.pathname === aboutPath) {
            setHomeLinkStyle({});
            setAboutLinkStyle({ textDecoration: "underline" });
        }
    }, [location.pathname]);

    return (
        <nav className="navBar">
            <Link
                id="homeLink"
                className="navBar__link navBar__link--accueil"
                to="/"
                style={homeLinkStyle}
            >
                Accueil
            </Link>
            <Link
                id="aboutLink"
                className="navBar__link"
                to="/apropos"
                style={aboutLinkStyle}
            >
                A Propos
            </Link>
        </nav>
    );
}

export default Nav;
