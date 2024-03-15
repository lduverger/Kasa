import { useState } from 'react';
import PropTypes from 'prop-types'; 
import leftArrow from '../assets/images/arrowLeft.svg'
import rightArrow from '../assets/images/arrowRight.svg'

const Carousel = ({ pictures }) => {

    const [index, setIndex] = useState(0);

    const picturesNb = pictures.length;


    const handleRight = () => {
        setIndex((prev) => (prev >= picturesNb - 1 ? 0 : prev + 1));
    }

    const handleLeft = () => {
        setIndex((prev) => (prev <= 0 ? picturesNb - 1 : prev - 1));
    }


    return (
        <div className='carousel'>
            <img className='carousel_picture' src={pictures[index]} alt="Logement" />
            {
                picturesNb > 1 && (
                    <>
                        <img onClick={handleLeft} className='carousel_arrow carousel_left' src={leftArrow} alt="Fleche gauche" />
                        <img onClick={handleRight} className='carousel_arrow carousel_right' src={rightArrow} alt="Fleche droite" />
                        <p className='carousel_index'>{index + 1}/{picturesNb}</p>
                    </>
                )
            }

        </div>
    );
};

Carousel.propTypes = {
    pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Carousel;