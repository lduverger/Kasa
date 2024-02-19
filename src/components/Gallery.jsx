import React, { useEffect, useState } from 'react';
import Card from './Card';
import data from '../assets/data/logements.json'

const Gallery = () => {

    const [lodgings, setLodgings] = useState([]);

    useEffect(() => {
        setLodgings(data)
    }, []);


    return (
        <div className='cards-container'>
            {
                lodgings.map(lodging => (
                    <Card key={lodging.id} 
                    src={lodging.cover} 
                    alt={"Photo de " + lodging.title}
                    title={lodging.title}
                    />
                ))
            }
            
        </div>
    );
};

export default Gallery;