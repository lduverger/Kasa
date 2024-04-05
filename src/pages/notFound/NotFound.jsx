import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='pageNotFound'>
            <h1>404</h1>
            <p>Oups! La page que vous demandez n&apos;existe pas.</p>
            <NavLink className="pageNotFound_return" to="/">Retourner sur la page d&apos;accueil</NavLink>
        </div>
    );
};

export default NotFound;