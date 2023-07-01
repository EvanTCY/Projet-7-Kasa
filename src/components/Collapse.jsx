import arrowUp from "../img/vector/VectorUp.png";
import arrowDown from "../img/vector/VectorDown.png";
import { useState } from "react";

// scss
import "../styles/_Collapse.scss";

function Collapse({ title, description, className }) {
    const [isOpen, setIsOpen] = useState(false);

    // if the collapse is open, display {arrowUp} and {description}
    return isOpen ? (
        <div className={`collapseContainer collapseContainer--${className}`}>
            <div
                // to enable this element to receive a focus
                tabIndex="0"
                className="collapseContainer__collapse"
                onClick={() => setIsOpen(false)}
            >
                <span className={`collapseContainer__collapse__title`}>
                    {title}
                </span>
                <img
                    src={arrowUp}
                    alt="dropdown"
                    className="collapseContainer__collapse__icon"
                />
            </div>

            {description}
        </div>
    ) : (
        <div className={`collapseContainer collapseContainer--${className}`}>
            <div
                // to enable this element to receive a focus
                tabIndex="0"
                className="collapseContainer__collapse"
                onClick={() => setIsOpen(true)}
            >
                <span className={`collapseContainer__collapse__title`}>
                    {title}
                </span>
                <img
                    src={arrowDown}
                    alt="dropdown"
                    className="collapseContainer__collapse__icon"
                />
            </div>
        </div>
    );
}

export default Collapse;
