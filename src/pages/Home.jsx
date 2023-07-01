import React from "react";
import { apartments } from "../datas/apartments";
import { useEffect, useState } from "react";
import homeBanner from "../img/banners/homeBanner.png";

// components
import Card from "../components/Card";
import Banner from "../components/Banner";
import Section from "../components/Section";

function Home() {
    document.title = `Location d'appartements entre particuliers en France - Fiabilité, Bienveillance et Sécurité garenties | Kasa`;

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

    return (
        <React.Fragment>
            <Banner image={homeBanner} className="banner banner--apartment">
                {/* if screen width up to 768px, apply a line break */}
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
                {/* looping on each apartment in the apartments tab, to display apartment's elements with props */}
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
