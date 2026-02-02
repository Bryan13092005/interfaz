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

function Landing() {
  return (
    <div className="landing">
      <Header />
      <Promesa/>
      <Hero/>
      <ONG/>
      <Fundaciones />
      <FundacionesNuevas />
      <Contact />
      <Footer />

  

    </div>
  );
}

export default Landing;
