import React from 'react';
import './Fundaciones.css';

// Importar SVG
import medicinaSvg from '../../assets/medicina.svg';
import animalesSvg from '../../assets/animales.svg';
import educacionSvg from '../../assets/educacion.svg';
import alimentacionSvg from '../../assets/alimentacion.svg';

function Fundaciones() {
  const foundations = [
    {
      id: 1,
      title: 'SALUD Y PROTECCIÓN',
      items: [
        'METROFRATERNIDAD',
        'VISTIENDO SONRISAS',
        'FUNDACIÓN REINA DE QUITO',
        'FUNDACIÓN CAMINA CONMIGO',
        'FUNDACIÓN OPERACIÓN SONRISA',
        'ALBERGUE SAN JUAN DE DIOS',
        'UNICEF',
        'ORGANIZACIÓN PANAMERICANA DE LA SALUD'
      ],
      image: medicinaSvg,
      alt: 'Ilustración de salud y protección'
    },
    {
      id: 2,
      title: 'MEDIO AMBIENTE Y ANIMALES',
      items: [
        'PROTECCIÓN ANIMAL ECUADOR',
        'ALTROPICO',
        'FONDO MUNDIAL PARA LA NATURALEZA'
      ],
      image: animalesSvg,
      alt: 'Ilustración de medio ambiente y animales'
    },
    {
      id: 3,
      title: 'EDUCACION',
      items: [
        'FUNDACION CHILDREN INTERNATIONAL',
        'CENTRO DEL MUCHACHO TRABAJADOR',
        'FUNDACION ECUASOL',
        'WORLD VISION ECUADOR'
      ],
      image: educacionSvg,
      alt: 'Ilustración de educación'
    },
    {
      id: 4,
      title: 'ALIMENTACION',
      items: [
        'BANCO DE ALIMENTOS QUITO',
        'CARITAS INTERNACIONAL'
      ],
      image: alimentacionSvg,
      alt: 'Ilustración de alimentación'
    }
  ];

  return (
    <section className="foundations-section" id='donantes'>
      <h2 className="section-title">FUNDACIONES</h2>
      <div className="cards-container">
        {foundations.map((foundation) => (
          <article className="foundation-card" key={foundation.id}>
            <div className="foundation-info">
              <h3>{foundation.title}</h3>
              <ul className="foundation-list">
                {foundation.items.map((item, index) => (
                  <li key={index}>{item}</li>
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