import inactiveStar from '../assets/images/inactiveStar.svg';
import activeStar from '../assets/images/activeStar.svg';
import PropTypes from 'prop-types';


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

Notation.propTypes = {
  rating: PropTypes.number.isRequired,
}

export default Notation;