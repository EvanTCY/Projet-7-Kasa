import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

// scss
import "../styles/_Error.scss";

function Error() {
    document.title = `Kasa - Page introuvable`;

    // gets the current screen width
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    useEffect(() => {
        // set the new current screen width
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };
        // listen when screen width change and apply handleResize
        window.addEventListener("resize", handleResize);

        // apply effect on the screen width change
    }, [screenWidth]);

    return (
        <section className="globalSection globalSection--errorSection">
            <h1 className="errorTitle">404</h1>

            {/* if screen width up to 768px, apply a line break */}
            {screenWidth <= 768 ? (
                <span className="oups">
                    Oups! La page que <br /> vous demandez n'existe pas.
                </span>
            ) : (
                <span className="oups">
                    Oups! La page que vous demandez n'existe pas.
                </span>
            )}

            {/* create a path to the home page using Link  */}
            <Link to="/" className="homeLink">
                Retourner sur la page d’accueil
            </Link>
        </section>
    );
}
export default Error;
