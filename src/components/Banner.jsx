import "../styles/_Banner.scss";

function Banner({ image, className, children }) {
    return (
        <div className={className} role="banner">
            <img
                className="banner__img banner__img--aboutUs"
                src={image}
                alt="bannière-accueil"
            />
            {children}
        </div>
    );
}

export default Banner;
