import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";

function Nav() {
    const homePath = "/";
    const aboutPath = "/apropos";

    // gets the current url
    const location = useLocation();

    // state for link style
    const [homeLinkStyle, setHomeLinkStyle] = useState({});
    const [aboutLinkStyle, setAboutLinkStyle] = useState({});

    useEffect(() => {
        if (location.pathname === homePath) {
            // if location is on home page, underline "Accueil" link and unset the style on "A propos" link
            setHomeLinkStyle({ textDecoration: "underline" });
            setAboutLinkStyle({});
        } else if (location.pathname === aboutPath) {
            setHomeLinkStyle({});
            setAboutLinkStyle({ textDecoration: "underline" });
        } else {
            setHomeLinkStyle({});
            setAboutLinkStyle({});
        }
        // apply effect to url change
    }, [location.pathname]);

    return (
        <nav className="navBar">
            <Link
                className="navBar__link navBar__link--accueil"
                to="/"
                style={homeLinkStyle}
            >
                Accueil
            </Link>
            <Link className="navBar__link" to="/apropos" style={aboutLinkStyle}>
                A Propos
            </Link>
        </nav>
    );
}

export default Nav;
