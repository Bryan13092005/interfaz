import React from 'react';
import logo from '../../assets/logo1.png';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar__container">
      <img 
        src={logo} 
        className="navbar__logo" 
        alt="Logo Voces que Ayudan" 
      />
      <h1 className="h1">VOCES QUE AYUDAN</h1>
      <ul className="ul1">
        <li><a href="/login" className="a1">Iniciar Sesión</a></li>
        <li><a href="/register" className="a1">Registrarse</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;