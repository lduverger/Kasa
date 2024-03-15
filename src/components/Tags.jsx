import Tag from './Tag';
import PropTypes from 'prop-types';


const Tags = ({ className = '', tagsData }) => {

    return (
        <>
            <ul className={className}>
                {
                    tagsData.map((tag) => (
                        <Tag key={tag}
                            title={tag} />
                    ))
                }
            </ul>
        </>
    );
};

Tags.propTypes = {
    className: PropTypes.string.isRequired,
    tagsData: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
}

export default Tags;