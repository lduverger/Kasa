import { useNavigate } from 'react-router-dom';

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

export default Card;