import React from 'react';
import inactiveStar from '../assets/images/inactiveStar.svg';
import activeStar from '../assets/images/activeStar.svg';


const Notation = ({rating}) => {
    const stars = 5;
    let rate = [];

    for (var i = 0; i < stars; i++) {
        if (i < rating)   rate.push(<img key={i} src={activeStar}></img>);
        else rate.push(<img key={i} src={inactiveStar}></img>);
    }

    return (
        <div className='rating-container'>
            {rate}
        </div>
    );
};

export default Notation;