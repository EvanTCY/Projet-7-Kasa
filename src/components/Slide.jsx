import { useState, useEffect } from "react";
import arrowLeft from "../img/vector/VectorLeft.png";
import arrowRight from "../img/vector/VectorRight.png";

// scss
import "../styles/_Slide.scss";

function Slide({ picturesArray, altDescription }) {
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

    // picture index in picturesArray prop
    const [currentIndex, setCurrentIndex] = useState(0);
    const lastIndex = picturesArray.length - 1;

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

    // if there are more than 1 picture, display arrows and pagination
    return picturesArray.length > 1 ? (
        <div className="slide">
            <img
                className="slide__img"
                src={picturesArray[currentIndex]}
                alt={`${altDescription} - ${picturesArray.indexOf(
                    picturesArray[currentIndex + 1]
                )}`}
            />
            <div className="slide__arrows">
                <img
                    // to enable this element to receive a focus
                    tabIndex="0"
                    onClick={previousIndex}
                    className="slide__arrows__left"
                    src={arrowLeft}
                    alt="slide-arrowLeft"
                />
                <img
                    // to enable this element to receive a focus
                    tabIndex="0"
                    onClick={nextIndex}
                    className="slide__arrows__right"
                    src={arrowRight}
                    alt="slide-arrowRight"
                />
            </div>
            {/* if screen width up to 768px, display pagination */}
            {screenWidth >= 768 && (
                <span className="slide__imageNumber">{`${
                    // the picture number
                    currentIndex + 1
                    // total number of pictures
                }/${picturesArray.length}`}</span>
            )}
        </div>
    ) : (
        <div className="slide">
            <img
                className="slide__img"
                src={picturesArray[currentIndex]}
                alt={`${altDescription} - ${currentIndex + 1}`}
            />
        </div>
    );
}

export default Slide;
