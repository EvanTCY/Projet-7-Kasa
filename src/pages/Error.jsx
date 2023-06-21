import { Link } from "react-router-dom";
import "../styles/_Error.scss";

function Error() {
    return (
        <section className="globalSection globalSection--errorSection">
            <h1 className="errorTitle">404</h1>
            <span className="oups">
                Oups! La page que vous demandez n'existe pas.
            </span>

            <Link to="/" className="homeLink">
                Retourner sur la page d’accueil
            </Link>
        </section>
    );
}
export default Error;
