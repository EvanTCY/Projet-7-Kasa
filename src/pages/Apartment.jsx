import { apartments } from "../datas/apartments";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import React from "react";

// scss
import "../styles/_Apartment.scss";
import "../styles/_Banner.scss";

// components
import Section from "../components/Section";
import Slide from "../components/Slide";
import Tag from "../components/Tag";
import Star from "../components/Star";
import Collapse from "../components/Collapse";

function Apartment() {
    // gets the apartment ID from the current page url
    const params = useParams();
    const pageId = params.id;

    // check if the apartment ID, taken from the current page url, exists in the apartments tab
    const apartment = apartments.find((apartment) => apartment.id === pageId);

    const navigate = useNavigate();
    // if the apartment ID does not exist, the user is redirected to the error page with useNavigate
    useEffect(() => {
        apartment
            ? (document.title = `Kasa - ${apartment.title}`)
            : navigate("logement-introuvable");

        // the effect is applied only once, when the page is rendered
    }, []);

    // if the apartment ID does not exist, return null to block rendering of the apartment page and avoid errors in React App
    if (!apartment) {
        return null;
    }

    return (
        <React.Fragment>
            <Slide
                picturesArray={apartment.pictures}
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

                <div className="collapsesContainer">
                    <Collapse
                        className="apartmentPage"
                        title="Description"
                        description={
                            <p
                                className={`collapseContainer__description collapseContainer__description--apartmentPage`}
                            >
                                {apartment.description}
                            </p>
                        }
                    />
                    <Collapse
                        className="apartmentPage"
                        title="Equipements"
                        description={
                            <div
                                className={`collapseContainer__description collapseContainer__description--apartmentPage`}
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
