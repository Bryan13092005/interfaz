import React from 'react';
import './Hero.css';

// Importar imágenes
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.png';
import image5 from '../../assets/image5.png';
import image6 from '../../assets/image6.png';

function Hero() {
  const services = [
    { id: 1, img: image1, alt: "Imagen 1 - Trabajos ONGs" },
    { id: 2, img: image2, alt: "Imagen 2 - Trabajos ONGs" },
    { id: 3, img: image3, alt: "Imagen 3 - Trabajos ONGs" },
    { id: 4, img: image4, alt: "Imagen 4 - Trabajos ONGs" },
    { id: 5, img: image5, alt: "Imagen 5 - Trabajos ONGs" },
    { id: 6, img: image6, alt: "Imagen 6 - Trabajos ONGs" }
  ];

  return (
    <main className="hero container">
      <div className="hero__text">
        <h2 className="General">Nuestros Trabajos ONGs</h2>
      </div>
      <div className="hero__services">
        {services.map((service) => (
          <div className="service" key={service.id}>
            <img 
              src={service.img} 
              alt={service.alt} 
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </main>
  );
}

export default Hero;