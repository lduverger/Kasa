import React, { useRef, useState } from 'react';
import upArrow from '../assets/images/arrowUp.svg'

const Collapse = ({ className = '', title, children }) => {
    
    
    const contentRef = useRef();
    const refHeader = useRef();
    const [isExpanded, setIsExpanded] = useState(false);

    const reverseIsExpanded = () => {
        setIsExpanded((prev) => !prev);
    };

    return (
        <div className={'collapse ' + className}>
            <div ref={refHeader} className='collapse-header' onClick={reverseIsExpanded}>
                <h3>{title}</h3>
                <img src={upArrow} className={`collapse-arrow ${isExpanded ? "collapse-arrow_rotation" : ""}`} alt="fleche" />
            </div>
            <div className={`collapse-content_hide`} ref={contentRef} 
            style={isExpanded ? { 
                height: contentRef.current?.scrollHeight + "px",
                transform: "translateY(0px)" } 
                : 
                { 
                    height: "0px",
                transform: `translateY(${"-" + refHeader.current?.scrollHeight + "px" })` }}>
                <div className='collapse-text'>{children}</div>
            </div>
        </div>
    );
};

export default Collapse;