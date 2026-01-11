
import './MainNav.css';

function MainNav() {
  return (
    <nav className="navbar__botones">
      <ul className="ul2">
        <li><a href="#inicio" className="li2">Inicio</a></li>
        <li><a href="#donantes" className="li2">Donar ONGs</a></li>
        <li><a href="#contacto" className="li2">Contacto</a></li>
        <li><a href="#llamanos" className="li2" id="voluntariado-btn">Voluntariado</a></li>
      </ul>
    </nav>
  );
}

export default MainNav;