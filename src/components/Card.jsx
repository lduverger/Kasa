import React from 'react';
//import { useHistory } from 'react-router-dom'

const Card = ({ src, alt, title }) => {

    //const history = useHistory();

    return (
        <article className='card'>
                <img src={src} alt={alt} />
                <h2 className='card-title'>{title}</h2>
        </article>
    );
};

export default Card;