import { Link } from "react-router-dom";
import logo from "../../assets/logo1.png";
import "./Navbar.css";

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
        <li>
          <Link to="/login" className="a1">
            Iniciar Sesión
          </Link>
        </li>
        <li>
          <Link to="/registro" className="a1">
            Registrarse
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
