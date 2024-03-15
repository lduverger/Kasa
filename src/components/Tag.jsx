import PropTypes from 'prop-types';

const Tag = ({ title }) => {
    return (
        <>
            <li className='tag'>{title}</li>
        </>
    );
};

Tag.propTypes = {
    title: PropTypes.string.isRequired,
  }

export default Tag;