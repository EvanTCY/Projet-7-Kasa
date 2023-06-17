import { Link } from "react-router-dom";
import "../styles/_Card.scss";

function Card({ id, cover, alt, title }) {
    return (
        <Link to={`/logement/${id}`} className="apartment">
            <img className="apartment__img" src={cover} alt={alt} />
            <span className="apartment__title">{title}</span>
        </Link>
    );
}

export default Card;
