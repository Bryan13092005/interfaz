import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import ONG from "../ONG/ONG";
import Fundaciones from "../Fundaciones/Fundaciones";
import FundacionesNuevas from "../FundacionesNuevas/FundacionesNuevas";
import Promesa from "../Promesa/Promesa";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import "./Landing.css";
// Y así con los demás... (ONG, Fundaciones, Contact, Footer)
function Landing() {
  return (
    <div className="landing">
      <Header />
      <Hero />
      <ONG />
      <Fundaciones />
      <FundacionesNuevas />
      <Promesa />
      <Contact />
      <Footer />

      <Link to="/login">
       <button className="btn-login">Ir al Login</button>
       </Link>
       <Link to="/registro">
       <button className="btn-registro">Ir al Registro</button>
       </Link>

    </div>
  );
}

export default Landing;
