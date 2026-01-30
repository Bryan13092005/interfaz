import React from 'react';
import './Fundaciones.css';

// SVGs
import medicinaSvg from '../../assets/medicina.svg';
import animalesSvg from '../../assets/animales.svg';
import educacionSvg from '../../assets/educacion.svg';
import alimentacionSvg from '../../assets/alimentacion.svg';

function Fundaciones() {
  const foundations = [
    {
      id: 1,
      title: 'SALUD Y PROTECCIÓN',
      image: medicinaSvg,
      alt: 'Ilustración de salud y protección',
      items: [
        { name: 'METROFRATERNIDAD', url: 'https://metrofraternidad.org/' },
        { name: 'VISTIENDO SONRISAS', url: 'https://vistiendosonrisas.com/' },
        { name: 'FUNDACIÓN REINA DE QUITO', url: 'https://www.fundacionreinadequito.org/' },
        { name: 'FUNDACIÓN CAMINA CONMIGO', url: 'https://caminaconmigoec.org/' },
        { name: 'FUNDACIÓN OPERACIÓN SONRISA', url: 'https://operacionsonrisa.org.ec/' },
        { name: 'ALBERGUE SAN JUAN DE DIOS', url: 'https://alberguesanjuandedios.com/' },
        { name: 'UNICEF', url: 'https://unicef.org.ec/' },
        { name: 'OPS', url: 'https://www.paho.org/' }
      ]
    },
    {
      id: 2,
      title: 'MEDIO AMBIENTE Y ANIMALES',
      image: animalesSvg,
      alt: 'Ilustración de medio ambiente y animales',
      items: [
        { name: 'PROTECCIÓN ANIMAL ECUADOR', url: 'https://pae.ec/' },
        { name: 'ALTROPICO', url: 'https://altropico.org.ec/' },
        { name: 'WWF', url: 'https://www.worldwildlife.org/' }
      ]
    },
    {
      id: 3,
      title: 'EDUCACIÓN',
      image: educacionSvg,
      alt: 'Ilustración de educación',
      items: [
        { name: 'CHILDREN INTERNATIONAL', url: 'https://www.children.org/es' },
        { name: 'CENTRO DEL MUCHACHO TRABAJADOR', url: 'https://www.cmdt.org.ec/' },
        { name: 'FUNDACIÓN ECUASOL', url: 'https://www.ecuasol.org/es/inicio/' },
        { name: 'WORLD VISION ECUADOR', url: 'https://www.worldvision.org.ec/' }
      ]
    },
    {
      id: 4,
      title: 'ALIMENTACIÓN',
      image: alimentacionSvg,
      alt: 'Ilustración de alimentación',
      items: [
        { name: 'BANCO DE ALIMENTOS QUITO', url: 'https://www.baq.ec/' },
        { name: 'CÁRITAS INTERNACIONAL', url: 'https://www.caritasecuador.org/' }
      ]
    }
  ];

  return (
    <section className="foundations-section" id="donantes">
      <h2 className="section-title">FUNDACIONES</h2>

      <div className="cards-container">
        {foundations.map((foundation) => (
          <article className="foundation-card" key={foundation.id}>
            <div className="foundation-info">
              <h3>{foundation.title}</h3>

              <ul className="foundation-list">
                {foundation.items.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="foundation-image">
              <img
                src={foundation.image}
                alt={foundation.alt}
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Fundaciones;
