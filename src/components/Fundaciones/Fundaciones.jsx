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
        { name: 'METROFRATERNIDAD', url: 'https://www.metrofraternidad.org.ec/' },
        { name: 'VISTIENDO SONRISAS', url: 'https://vistiendosonrisas.org/' },
        { name: 'FUNDACIÓN REINA DE QUITO', url: 'https://reinadequito.org/' },
        { name: 'FUNDACIÓN CAMINA CONMIGO', url: 'https://caminaconmigo.org.ec/' },
        { name: 'FUNDACIÓN OPERACIÓN SONRISA', url: 'https://www.operationsmile.org/' },
        { name: 'ALBERGUE SAN JUAN DE DIOS', url: 'https://sanjuandedios.org.ec/' },
        { name: 'UNICEF', url: 'https://www.unicef.org/' },
        { name: 'OPS', url: 'https://www.paho.org/' }
      ]
    },
    {
      id: 2,
      title: 'MEDIO AMBIENTE Y ANIMALES',
      image: animalesSvg,
      alt: 'Ilustración de medio ambiente y animales',
      items: [
        { name: 'PROTECCIÓN ANIMAL ECUADOR', url: 'https://proteccionanimal.ec/' },
        { name: 'ALTROPICO', url: 'https://www.altropico.org/' },
        { name: 'WWF', url: 'https://www.worldwildlife.org/' }
      ]
    },
    {
      id: 3,
      title: 'EDUCACIÓN',
      image: educacionSvg,
      alt: 'Ilustración de educación',
      items: [
        { name: 'CHILDREN INTERNATIONAL', url: 'https://www.children.org/' },
        { name: 'CENTRO DEL MUCHACHO TRABAJADOR', url: 'https://www.cmdt.org.ec/' },
        { name: 'FUNDACIÓN ECUASOL', url: 'https://ecuador-solar.org/' },
        { name: 'WORLD VISION ECUADOR', url: 'https://www.worldvision.org.ec/' }
      ]
    },
    {
      id: 4,
      title: 'ALIMENTACIÓN',
      image: alimentacionSvg,
      alt: 'Ilustración de alimentación',
      items: [
        { name: 'BANCO DE ALIMENTOS QUITO', url: 'https://bancodealimentosquito.org/' },
        { name: 'CÁRITAS INTERNACIONAL', url: 'https://www.caritas.org/' }
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
