
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import ONG from '../ONG/ONG';
import Fundaciones from '../Fundaciones/Fundaciones';
import Promesa from '../Promesa/Promesa';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import './Landing.css';

function Landing() {
  return (
    <div className="landing">
      <Header />
      <Hero />
      <ONG />
      <Fundaciones />
      <Promesa />
      <Contact />
      <Footer />
    </div>
  );
}

export default Landing;