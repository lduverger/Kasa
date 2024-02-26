import React from 'react';
import Navigation from './Navigation';
import logo from '../assets/images/LOGO.svg'

const Header = () => {
    return (
        <header>
            <img src={logo} alt="logo Kasa" />
            <Navigation />
        </header>
    );
};

export default Header;