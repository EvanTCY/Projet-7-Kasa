import React from "react";
import aboutUsbanner from "../img/banners/abouUsBanner.png";
import { aPropos } from "../datas/aPropos";

// components
import Banner from "../components/Banner";
import Section from "../components/Section";
import Collapse from "../components/Collapse";

function AboutUs() {
    document.title = `Kasa - À propos`;

    return (
        <React.Fragment>
            <Banner
                image={aboutUsbanner}
                className={"banner banner--aboutUs"}
            />
            <Section className="globalSection globalSection--aboutUsSection">
                {aPropos.map((about, index) => (
                    <Collapse
                        key={index}
                        title={about.title}
                        description={
                            <p className={`collapseContainer__description`}>
                                {about.description}
                            </p>
                        }
                    />
                ))}
            </Section>
        </React.Fragment>
    );
}

export default AboutUs;
