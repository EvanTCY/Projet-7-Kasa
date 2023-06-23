import "../styles/_Star.scss";

function Star({ rating }) {
    const stars = [];

    for (let i = 0; i < rating; i++) {
        stars.push(
            <i
                key={`star-${i}`}
                className="fa-solid fa-star starsContainer__star"
            ></i>
        );
    }

    while (stars.length < 5) {
        stars.push(
            <i
                key={`star-empty-${stars.length}`}
                className="fa-solid fa-star starsContainer__star starsContainer__star--emptyStar"
            ></i>
        );
    }

    return <div className="starsContainer">{stars}</div>;
}

export default Star;
