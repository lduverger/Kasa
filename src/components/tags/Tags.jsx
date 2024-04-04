import PropTypes from 'prop-types';


const Tags = ({ className = '', tagsData }) => {

    return (
        <ul className={className}>
            {
                tagsData.map((tag) => (
                    <li key={tag} className='tag'>{tag}</li>
                ))
            }
        </ul>
    );
};

Tags.propTypes = {
    className: PropTypes.string.isRequired,
    tagsData: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
}

export default Tags;