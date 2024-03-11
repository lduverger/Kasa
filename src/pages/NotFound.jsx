import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='pageNotFound'>
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <NavLink className="pageNotFound_return" to="/">Retourner sur la page d'accueil</NavLink>
        </div>
    );
};

export default NotFound;