import { useEffect, useState } from 'react';
import Card from '../card/Card';
import data from '../../assets/data/logements.json'

const Gallery = () => {

    const [housings, setHousings] = useState([]);

    useEffect(() => {
        setHousings(data)
    }, []);


    return (
        <div className='cards-container'>
            {
                housings.map(housing => (
                    <Card key={housing.id}
                        id={housing.id}
                        src={housing.cover}
                        alt={"Photo de " + housing.title}
                        title={housing.title}
                    />
                ))
            }

        </div>
    );
};

export default Gallery;