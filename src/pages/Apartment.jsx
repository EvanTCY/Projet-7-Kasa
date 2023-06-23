import Section from "../components/Section";
import Slide from "../components/Slide";
import Tag from "../components/Tag";
import Star from "../components/Star";
import { apartments } from "../datas/apartments";
import { useParams } from "react-router-dom";
import React from "react";

import "../styles/_Apartment.scss";
import "../styles/_Banner.scss";
import Toggle from "../components/Toggle";

import { useState } from "react";

function Apartment() {
    const params = useParams();
    const pageId = params.id;

    const apartment = apartments.find((apartment) => apartment.id === pageId);

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
                        className="toggleContainer--apartmentPage"
                        title="Description"
                        description={apartment.description}
                    />
                    <Toggle
                        className="toggleContainer--apartmentPage"
                        title="Equipements"
                        description={
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
                        }
                    />
                </div>
            </Section>
        </React.Fragment>
    );
}

export default Apartment;
