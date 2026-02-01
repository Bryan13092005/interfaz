import React, { useRef } from 'react';
import './ONG.css';

// Importaciones de tus imágenes (se mantienen igual)
import alimentacionImg from '../../assets/imageAlimentacion.png';
import caritasImg from '../../assets/imageCaritasInternacional.png';
import metroImg from '../../assets/metrofraternidad.png';
import sonrisasImg from '../../assets/VISTIENDO_SONRISAS.png';
import reinaImg from '../../assets/FRQ.png';
import caminaImg from '../../assets/CAMINA_CONMIGO.png';
import operacionImg from '../../assets/OP_SONRISA.png';
import albergueImg from '../../assets/SJDD.png';
import opsImg from '../../assets/OPS.png';
import unicefImg from '../../assets/unicef.png';
import paeImg from '../../assets/pae.png';
import altropicoImg from '../../assets/altropico.png';
import wwfImg from '../../assets/wwf.png';
import childrenImg from '../../assets/childrenInternational.png';
import cmtImg from '../../assets/cmt.png';
import ecuasolImg from '../../assets/ecuasol.png';
import wveImg from '../../assets/wve.png';

function ONG() {
  // Función para mover el carrusel con las flechas
  const scroll = (id, direction) => {
    const container = document.getElementById(id);
    const scrollAmount = 350; 
    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const categorias = [
    {
      id: 'alimentacion',
      title: 'Alimentación',
      ongs: [
        { id: 1, nombre: 'BANCO DE ALIMENTOS QUITO', descripcion: 'Se dedica a rescatar alimentos que serían descartados, los clasifica y los distribuye a personas vulnerables a través de redes de comedores, comunidades, etc.', imagen: alimentacionImg },
        { id: 2, nombre: 'CARITAS INTERNACIONAL', descripcion: 'Es la organización oficial de la Iglesia Católica en Ecuador encargada de gestionar y organizar la obra social, promoviendo la solidaridad y el desarrollo integral de las comunidades más vulnerables.', imagen: caritasImg }
      ]
    },
    {
      id: 'salud',
      title: 'Salud y Protección',
      ongs: [
        { id: 3, nombre: 'MetroFraternidad', descripcion: 'Se dedica a trabajar con niños y adolescentes de escasos recursos, en el ámbito de salud.', imagen: metroImg },
        { id: 4, nombre: 'Vistiendo Sonrisas', descripcion: 'Mejorar la calidad de vida de los más vulnerables entregando vestimenta en buen estado recolectada mediante donaciones de sectores diversos.', imagen: sonrisasImg },
        { id: 5, nombre: 'Fundacion Reina de Quito', descripcion: 'Se dedica a trabajar con niños de 0-4 años, familias con niños pequeños que necesitan apoyo en su desarrollo temprano.', imagen: reinaImg },
        { id: 6, nombre: 'Fundacion Camina Conmigo', descripcion: 'Se dedica a trabajar con niños con diagnóstico de autismo u otros trastornos del neurodesarrollo.', imagen: caminaImg },
        { id: 7, nombre: 'Operacion Sonrisa', descripcion: 'Se dedica a trabajar con niños(as) con fisura de labio y/o paladar.', imagen: operacionImg },
        { id: 8, nombre: 'Albergue San Juan de Dios', descripcion: 'Atención integral para niños, niñas y adolescentes con trastornos del neurodesarrollo y apoyo socioemocional.', imagen: albergueImg },
        { id: 9, nombre: 'Organizacion Panamericana de la Salud (OPS)', descripcion: 'Trabajan para mejorar la salud y el bienestar de los países de América Latina y el Caribe.', imagen: opsImg },
        { id: 10, nombre: 'UNICEF', descripcion: 'Promueven los derechos de la niñez y adolescencia en salud, educación y protección.', imagen: unicefImg }
      ]
    },
    {
      id: 'medioambiente',
      title: 'Medio Ambiente y Animales',
      ongs: [
        { id: 11, nombre: 'Protección Animal Ecuador', descripcion: 'Se dedica a rescatar, acoger y proteger animales abandonados o maltratados, principalmente perros y gatos.', imagen: paeImg },
        { id: 12, nombre: 'Altropico', descripcion: 'Se dedica a la conservación del trópico: biodiversidad, protección de áreas naturales, e investigación ambiental.', imagen: altropicoImg },
        { id: 13, nombre: 'Fondo Mundial Para la Naturaleza', descripcion: 'WWF trabaja globalmente para conservar la naturaleza, proteger especies en peligro, preservar ecosistemas críticos y promover desarrollo sostenible.', imagen: wwfImg }
      ]
    },
    {
      id: 'educacion',
      title: 'Educación',
      ongs: [
        { id: 14, nombre: 'Fundación Children International', descripcion: 'Se dedica a trabajar con niños, niñas, adolescentes en zonas vulnerables de Quito (La Magdalena, La Colmena, El Panecillo, etc.)', imagen: childrenImg },
        { id: 15, nombre: 'Centro del Muchacho Trabajador', descripcion: 'Se dedica a trabajar con niños y niñas que deben trabajar (o trabajan) para ayudar a sus familias; brindar alternativas educativas, sociales y culturales para romper círculos de pobreza.', imagen: cmtImg },
        { id: 16, nombre: 'Fundación Ecuasol', descripcion: 'Dar apoyo a niños y jóvenes de barrios desfavorecidos de Quito para que accedan a educación, inculcando valores humanos, académicos y sociales.', imagen: ecuasolImg },
        { id: 17, nombre: 'World Vision Ecuador', descripcion: 'Trabajan para eliminar la violencia contra la niñez y adolescencia más vulnerable, enfocándose en áreas como salud, educación y protección.', imagen: wveImg }
      ]
    }
  ];

  return (
    <section className="ong-container">
      <h1 className="main-title">Nuestras Alianzas</h1>
      
      {categorias.map((cat) => (
        <div key={cat.id} className="cat-wrapper">
          <h2 className="cat-name">{cat.title}</h2>
          
          <div className="carousel-wrapper">
            <button className="nav-btn prev" onClick={() => scroll(cat.id, 'left')}>‹</button>
            
            <div className="ong-scroll" id={cat.id}>
              {cat.ongs.map((ong) => (
                <article className="ong-card" key={ong.id}>
                  <div className="card-image">
                    <img src={ong.imagen} alt={ong.nombre} />
                  </div>
                  <div className="card-body">
                    <h3>{ong.nombre}</h3>
                    <p>{ong.descripcion}</p>
                  </div>
                </article>
              ))}
            </div>

            <button className="nav-btn next" onClick={() => scroll(cat.id, 'right')}>›</button>
          </div>
        </div>
      ))}
    </section>
  );
}

export default ONG;