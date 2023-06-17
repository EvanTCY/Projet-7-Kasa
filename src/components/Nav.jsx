import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";

function Nav() {
    const homePath = "/";
    const aboutPath = "/apropos";

    // Utilisation de useLocation pour obtenir l'objet location de React Router
    const location = useLocation();

    // États pour les styles des liens
    const [homeLinkStyle, setHomeLinkStyle] = useState({});
    const [aboutLinkStyle, setAboutLinkStyle] = useState({});

    // Utilisation de useEffect pour réagir aux changements de location.pathname
    useEffect(() => {
        // Vérification du chemin de l'URL pour déterminer les styles des liens
        if (location.pathname === homePath) {
            // Si nous sommes sur la page d'accueil, souligner le lien "Accueil" et réinitialiser le style du lien "À Propos"
            setHomeLinkStyle({ textDecoration: "underline" });
            setAboutLinkStyle({});
        } else if (location.pathname === aboutPath) {
            // Si nous sommes sur la page "À Propos", réinitialiser le style du lien "Accueil" et souligner le lien "À Propos"
            setHomeLinkStyle({});
            setAboutLinkStyle({ textDecoration: "underline" });
        }
    }, [location.pathname]);

    return (
        <nav className="navBar">
            <Link
                className="navBar__link navBar__link--accueil"
                to="/"
                style={homeLinkStyle} // Appliquer le style défini par l'état homeLinkStyle
            >
                Accueil
            </Link>
            <Link
                className="navBar__link"
                to="/apropos"
                style={aboutLinkStyle} // Appliquer le style défini par l'état aboutLinkStyle
            >
                A Propos
            </Link>
        </nav>
    );
}

export default Nav;
