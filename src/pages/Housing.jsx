import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import data from '../assets/data/logements.json'

const Housing = () => {

    const [housing, setHousing] = useState('');
    const location = useLocation();

    console.log("location.state.id = ", location.state.id)


    useEffect(() => {
        data.forEach(housingData => {
            console.log("housing id = ", housingData.id);
            if(housingData.id === location.state.id){
                setHousing(housingData);
            }
        })
    }, [location.state.id]);

    return (
        <div>
            <h1>{housing.title}</h1>
            <p>id du logement  = {housing.id}</p>
        </div>
    );
};

export default Housing;