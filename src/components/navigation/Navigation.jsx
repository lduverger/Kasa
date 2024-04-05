import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <ul>
                <NavLink to="/"
                    style={({isActive}) => isActive ? {textDecoration: "underline"} : {}} end>
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/about"
                    style={({isActive}) => isActive ? {textDecoration: "underline"} : {}} end>
                    <li>A Propos</li>
                </NavLink>
            </ul>
        </nav>
    );
};

export default Navigation;