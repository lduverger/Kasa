import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const Card = ({ id, src, alt, title }) => {

    const navigate = useNavigate();

    const goToHousing = (id) => {
        navigate(`/Kasa/housing/${id}`);
    }

    return (
        <article className='card' onClick={() => goToHousing(id)}>
            <img src={src} alt={alt} />
            <h2 className='card-title'>{title}</h2>
        </article>
    );
};

Card.propTypes = {
    id: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default Card;