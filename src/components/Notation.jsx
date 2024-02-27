import React from 'react';
import inactiveStar from '../assets/images/inactiveStar.svg';
import activeStar from '../assets/images/activeStar.svg';


const Notation = ({ rating }) => {
  const STARS = 5;

  return (
    <div className="rating-container">
      {[...new Array(STARS)].map((index, i) => {
        const ratePicture = i < rating ? activeStar : inactiveStar;
        return <img key={i} src={ratePicture}></img>;
      })}
    </div>
  );
};

export default Notation;