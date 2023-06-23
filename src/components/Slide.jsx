import { useState } from "react";
import arrowLeft from "../img/vector/VectorLeft.png";
import arrowRight from "../img/vector/VectorRight.png";
import "../styles/_Slide.scss";

function Slide({ array, altDescription }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const lastIndex = array.length - 1;

    function nextIndex() {
        currentIndex >= lastIndex
            ? setCurrentIndex(0)
            : setCurrentIndex(currentIndex + 1);
    }

    function previousIndex() {
        currentIndex <= 0
            ? setCurrentIndex(lastIndex)
            : setCurrentIndex(currentIndex - 1);
    }

    return array.length > 1 ? (
        <div className="slide">
            <img
                className="slide__img"
                src={array[currentIndex]}
                alt={`${altDescription} - ${array.indexOf(
                    array[currentIndex + 1]
                )}`}
            />
            <div className="slide__arrows">
                <img
                    onClick={previousIndex}
                    className="slide__arrows__left"
                    src={arrowLeft}
                    alt="slide-arrowLeft"
                />
                <img
                    onClick={nextIndex}
                    className="slide__arrows__right"
                    src={arrowRight}
                    alt="slide-arrowRight"
                />
            </div>
            <span className="slide__imageNumber">{`${
                currentIndex < array.length - 1
                    ? array.indexOf(array[currentIndex + 1])
                    : array.length
            }/${array.length}`}</span>
        </div>
    ) : (
        <div className="slide">
            <img
                className="slide__img"
                src={array[currentIndex]}
                alt={`${altDescription} - ${array.indexOf(
                    array[currentIndex + 1]
                )}`}
            />
        </div>
    );
}

export default Slide;
