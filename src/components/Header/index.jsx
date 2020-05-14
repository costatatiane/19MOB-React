import React from 'react';
import './style.css'

import logo from '../../assets/logo.png';

const Header = () => (
    <header className="header">
        <div className="container">
            <img className="logo" src={logo} alt="logo Mercado Livre" />
            {/* <input type="text" id="search" className="search" placeholder="Buscar produtos, marcas e muito mais"></input>
            <button className="btn-link">Baixe grátis o app do Mercado Livre</button> */}
        </div>
    </header>
);

export default Header;