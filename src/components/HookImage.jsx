import React from 'react';
import background from "../assets/images/homePageBackground.png"


const HookImage = () => {
    return (
        <div>
            <article
                className='articleTest'
                style={{ backgroundImage: `url(${background})`, 
                backgroundRepeat:"no-repeat",backgroundSize:"contain", 
                height:600,width:600}}
                
            >
            
        </article>
        </div >
    );
};

export default HookImage;