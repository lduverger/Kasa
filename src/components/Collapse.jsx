import React, { useRef, useState } from 'react';
import upArrow from '../assets/images/arrowUp.svg'

const Collapse = ({ className='', title, content }) => {

    const ref = useRef(null);
    ref.current

    const [isExpanded, setIsExpanded] = useState(false);

    const reverseIsExpanded = () => {
        setIsExpanded((prev) => !prev);
    };

    return (
        <div className={'collapse ' + className}>
            <div className='collapse-header' onClick={reverseIsExpanded}>
                <h3>{title}</h3>
                <img src={upArrow} alt="fleche" />
            </div>
            {isExpanded && <p>{content}</p>}
        </div>
    );
};

export default Collapse;