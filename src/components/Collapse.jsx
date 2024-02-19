import React, { useRef, useState } from 'react';

const Collapse = ({title, content}) => {

    const ref = useRef(null);
    ref.current

    const [isExpanded, setIsExpanded] = useState(false);

    const invertIsExpanded = () => {
        setIsExpanded((prev) => !prev);
    };

    return (
        <div className='collapse collapse-about'>
            <div className='collapse-header' onClick={invertIsExpanded}>
            <h3>{title}</h3>
            <img src="src/assets/images/arrowUp.svg" alt="fleche" />
            </div>
            {isExpanded && <p>{content}</p>}

        </div>
    );
};

export default Collapse;