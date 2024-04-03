import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <ul>
                <NavLink to="/Kasa">
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/Kasa/about">
                    <li>A Propos</li>
                </NavLink>
            </ul>
        </nav>
    );
};

export default Navigation;