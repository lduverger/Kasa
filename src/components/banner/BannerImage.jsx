import PropTypes from 'prop-types';

const BannerImage = ({ background, text }) => {
    return (
        <div className='banner'>
            <img src={background} alt="Photo de paysage" />
            <h1>{text}</h1>
        </div>
    );
};

BannerImage.propTypes = {
    background: PropTypes.string.isRequired,
    text: PropTypes.string,
}

export default BannerImage;