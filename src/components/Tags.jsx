import React, { useEffect, useState } from 'react';
import Tag from './Tag';

const Tags = ({ className='', tagsData }) => {

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

export default Tags;