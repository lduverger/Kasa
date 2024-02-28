import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Tags from '../components/Tags';
import data from '../assets/data/logements.json'
import Collapse from '../components/Collapse';
import leftArrow from '../assets/images/arrowLeft.svg'
import rightArrow from '../assets/images/arrowRight.svg'
import Notation from '../components/Notation';
const Housing = () => {

    const location = useLocation();
    const housing = data.find(housingData => housingData.id === location.state.id);
    const [index, setIndex] = useState(0);

    const picturesNB = housing.pictures.length;

    const handleRight = () => {
        setIndex((prev) => (prev >= picturesNB - 1 ? 0 : prev + 1));
    }

    const handleLeft = () => {
        setIndex((prev) => (prev <= 0 ? picturesNB - 1 : prev - 1));
    }


    return (
        <>
            <div className='carousel'>
                <img className='carousel_picture' src={housing.pictures[index]} alt="Logement" />
                <img onClick={handleLeft} className='carousel_arrow carousel_left' src={leftArrow} alt="Fleche gauche" />
                <img onClick={handleRight} className='carousel_arrow carousel_right' src={rightArrow} alt="Fleche droite" />
                <p className='carousel_index'>{index + 1}/{picturesNB}</p>
            </div>
            <section className='housing_content'>
                <div className='housing_brief'>
                    <h1 className='housing_title'>{housing.title}</h1>
                    <p className='housing_location'>{housing.location}</p>
                    <Tags className="housing_tags" tagsData={housing.tags} />
                </div>
                <div className='housing_host'>
                    <div>

                    <span className='housing_host-name'>{housing.host.name}</span>
                    <img className='housing_host-avatar' src={housing.host.picture} alt={housing.host.name} />
                    </div>
                <div>
                    <Notation rating={housing.rating} />
                </div>
                </div>

            </section>

            <div className='housing_collapses'>
                <Collapse className='collapse-housing' title="Description">
                    {housing.description}
                </Collapse>
                <Collapse className='collapse-housing' title="Équipements">
                    <ul>
                        {
                            housing.equipments.map((equipement) => <li>{equipement}</li>)
                        }
                    </ul>
                </Collapse>
            </div>
        </>
    );
};

export default Housing;