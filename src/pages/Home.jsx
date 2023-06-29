import React from "react";
import homeBanner from "../img/banners/homeBanner.png";
import { apartments } from "../datas/apartments";

import Card from "../components/Card";
import Banner from "../components/Banner";
import Section from "../components/Section";

import { useEffect, useState } from "react";

function Home() {
    document.title = `Kasa - Accueil`;
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
    }, [screenWidth]);

    return (
        <React.Fragment>
            <Banner image={homeBanner} className="banner banner--apartment">
                {screenWidth <= 768 ? (
                    <h1 className="banner__title">
                        Chez vous,
                        <br />
                        partout et ailleurs
                    </h1>
                ) : (
                    <h1 className="banner__title">
                        Chez vous, partout et ailleurs
                    </h1>
                )}
            </Banner>

            <Section className="globalSection globalSection--homeSection">
                {apartments.map((apartment) => (
                    <Card
                        key={apartment.id}
                        id={apartment.id}
                        alt={apartment.alt}
                        cover={apartment.cover}
                        title={apartment.title}
                    />
                ))}
            </Section>
        </React.Fragment>
    );
}

export default Home;
