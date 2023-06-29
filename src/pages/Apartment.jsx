import Section from "../components/Section";
import Slide from "../components/Slide";
import Tag from "../components/Tag";
import Star from "../components/Star";
import { apartments } from "../datas/apartments";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import React from "react";

import "../styles/_Apartment.scss";
import "../styles/_Banner.scss";
import Toggle from "../components/Toggle";

function Apartment() {
    const params = useParams();
    const pageId = params.id;
    const navigate = useNavigate();

    const apartment = apartments.find((apartment) => apartment.id === pageId);

    // useEffect(() => {
    document.title = `Kasa - ${apartment.title}`;
    // }, []);

    useEffect(() => {
        if (!apartment) {
            navigate("logement-introuvable");
        }
    }, []);

    if (!apartment) {
        return null;
    }

    return (
        <React.Fragment>
            <Slide
                array={apartment.pictures}
                altDescription={apartment.title}
            />

            <Section className="globalSection--apartmentSection">
                <div className="descriptionsContainer">
                    <div className="bloc-1">
                        <h1 className="bloc-1__title">{apartment.title}</h1>
                        <span className="bloc-1__location">
                            {apartment.location}
                        </span>
                        <div className="bloc-1__tagsContainer">
                            {apartment.tags.map((tag, index) => (
                                <Tag key={index}>{tag}</Tag>
                            ))}
                        </div>
                    </div>
                    <div className="bloc-2">
                        <div className="hostContainer">
                            <span className="hostContainer__name">
                                {apartment.host.name}
                            </span>

                            <img
                                className="hostContainer__picture"
                                src={apartment.host.picture}
                                alt={`Propriétaire - ${apartment.host.name}`}
                            />
                        </div>
                        <Star rating={parseInt(apartment.rating)} />
                    </div>
                </div>

                <div className="togglesContainer">
                    <Toggle
                        className="apartmentPage"
                        title="Description"
                        description={
                            <p
                                className={`toggleContainer__description toggleContainer__description--apartmentPage`}
                            >
                                {apartment.description}
                            </p>
                        }
                    />
                    <Toggle
                        balise={"div"}
                        className="apartmentPage"
                        title="Equipements"
                        description={
                            <div
                                className={`toggleContainer__description toggleContainer__description--apartmentPage`}
                            >
                                <ul className="ulEquipements">
                                    {apartment.equipments.map(
                                        (equipment, index) => (
                                            <li
                                                className="ulEquipements__equipement"
                                                key={index}
                                            >
                                                {equipment}
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                        }
                    />
                </div>
            </Section>
        </React.Fragment>
    );
}

export default Apartment;
