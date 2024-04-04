import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <ul>
                <NavLink to="/Kasa"
                    style={({isActive}) => isActive ? {textDecoration: "underline"} : {}} end>
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/Kasa/about"
                    style={({isActive}) => isActive ? {textDecoration: "underline"} : {}} end>
                    <li>A Propos</li>
                </NavLink>
            </ul>
        </nav>
    );
};

export default Navigation;