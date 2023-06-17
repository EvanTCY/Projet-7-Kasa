import "../styles/_Toggle.scss";
import arrow from "../img/Vector.png";

function Toggle({ title, description }) {
    return (
        <div className="toggleContainer">
            <div className="toggleContainer__toggle">
                <span className="toggleContainer__toggle__title">{title}</span>
                <img
                    src={arrow}
                    alt="dropdown"
                    className="toggleContainer__toggle__icon"
                />
            </div>
            <p className="toggleContainer__description">{description}</p>
        </div>
    );
}

export default Toggle;
