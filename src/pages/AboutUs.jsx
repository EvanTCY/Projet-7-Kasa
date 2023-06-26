import React from "react";
import aboutUsbanner from "../img/banners/abouUsBanner.png";
import { aPropos } from "../datas/aPropos";

import Banner from "../components/Banner";
import Section from "../components/Section";
import Toggle from "../components/Toggle";

function AboutUs() {
    return (
        <React.Fragment>
            <Banner image={aboutUsbanner} className={"banner banner--size"} />
            <Section className="globalSection globalSection--aboutUsSection">
                {aPropos.map((about, index) => (
                    <Toggle
                        key={index}
                        title={about.title}
                        description={about.description}
                    />
                ))}
            </Section>
        </React.Fragment>
    );
}

export default AboutUs;
