import { Link } from "react-router-dom";
import "../styles/_Error.scss";

import { useEffect, useState } from "react";

function Error() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    document.title = `Kasa - Page introuvable`;

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
    }, [screenWidth]);

    return (
        <section className="globalSection globalSection--errorSection">
            <h1 className="errorTitle">404</h1>

            {screenWidth <= 768 ? (
                <span className="oups">
                    Oups! La page que <br /> vous demandez n'existe pas.
                </span>
            ) : (
                <span className="oups">
                    Oups! La page que vous demandez n'existe pas.
                </span>
            )}

            <Link to="/" className="homeLink">
                Retourner sur la page d’accueil
            </Link>
        </section>
    );
}
export default Error;
