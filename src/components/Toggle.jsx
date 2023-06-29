import "../styles/_Toggle.scss";
import arrowUp from "../img/vector/VectorUp.png";
import arrowDown from "../img/vector/VectorDown.png";
import { useState } from "react";

function Toggle({ title, description, className }) {
    const [isOpen, setIsOpen] = useState(false);

    return isOpen ? (
        <div className={`toggleContainer toggleContainer--${className}`}>
            <div
                className="toggleContainer__toggle"
                onClick={() => setIsOpen(false)}
            >
                <span className="toggleContainer__toggle__title">{title}</span>
                <img
                    src={arrowUp}
                    alt="dropdown"
                    className="toggleContainer__toggle__icon"
                />
            </div>

            {description}
        </div>
    ) : (
        <div className={`toggleContainer toggleContainer--${className}`}>
            <div
                className="toggleContainer__toggle"
                onClick={() => setIsOpen(true)}
            >
                <span className="toggleContainer__toggle__title">{title}</span>
                <img
                    src={arrowDown}
                    alt="dropdown"
                    className="toggleContainer__toggle__icon"
                />
            </div>
        </div>
    );
}

export default Toggle;
