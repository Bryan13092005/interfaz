import React from 'react';
import './ONG.css';

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
  const categorias = [
    {
      id: 'alimentacion',
      title: 'Alimentación',
      colorClass: 'seccion-alimentacion',
      ongs: [
        {
          id: 1,
          nombre: 'BANCO DE ALIMENTOS QUITO',
          descripcion: 'Se dedica a rescatar alimentos que serían descartados, los clasifica y los distribuye a personas vulnerables a través de redes de comedores, comunidades, etc.',
          imagen: alimentacionImg,
          alt: 'Banco de alimentos de Quito'
        },
        {
          id: 2,
          nombre: 'CARITAS INTERNACIONAL',
          descripcion: 'Es la organización oficial de la Iglesia Católica en Ecuador encargada de gestionar y organizar la obra social, promoviendo la solidaridad y el desarrollo integral de las comunidades más vulnerables.',
          imagen: caritasImg,
          alt: 'Caritas Internacional'
        }
      ]
    },
    {
      id: 'salud',
      title: 'Salud y Protección',
      colorClass: 'seccion-salud',
      ongs: [
        {
          id: 3,
          nombre: 'MetroFraternidad',
          descripcion: 'Se dedica a trabajar con niños y adolescentes de escasos recursos, en el ámbito de salud.',
          imagen: metroImg,
          alt: 'metrofraternidad'
        },
        {
          id: 4,
          nombre: 'Vistiendo Sonrisas',
          descripcion: 'Mejorar la calidad de vida de los más vulnerables entregando vestimenta en buen estado recolectada mediante donaciones de sectores diversos.',
          imagen: sonrisasImg,
          alt: 'VISTIENDO_SONRISAS'
        },
        {
          id: 5,
          nombre: 'Fundacion Reina de Quito',
          descripcion: 'Se dedica a trabajar con niños de 0-4 años, familias con niños pequeños que necesitan apoyo en su desarrollo temprano.',
          imagen: reinaImg,
          alt: 'Fundacion Reina de Quito'
        },
        {
          id: 6,
          nombre: 'Fundacion Camina Conmigo',
          descripcion: 'Se dedica a trabajar con niños con diagnóstico de autismo u otros trastornos del neurodesarrollo.',
          imagen: caminaImg,
          alt: 'CAMINA CONMIGO'
        },
        {
          id: 7,
          nombre: 'Operacion Sonrisa',
          descripcion: 'Se dedica a trabajar con niños(as) con fisura de labio y/o paladar.',
          imagen: operacionImg,
          alt: 'Operacion Sonrisa'
        },
        {
          id: 8,
          nombre: 'Albergue San Juan de Dios',
          descripcion: 'Atención integral para niños, niñas y adolescentes con trastornos del neurodesarrollo y apoyo socioemocional.',
          imagen: albergueImg,
          alt: 'Albergue San Juan de Dios'
        },
        {
          id: 9,
          nombre: 'Organizacion Panamericana de la Salud (OPS)',
          descripcion: 'Trabajan para mejorar la salud y el bienestar de los países de América Latina y el Caribe.',
          imagen: opsImg,
          alt: 'Organizacion Panamericana de la Salud'
        },
        {
          id: 10,
          nombre: 'UNICEF',
          descripcion: 'Promueven los derechos de la niñez y adolescencia en salud, educación y protección.',
          imagen: unicefImg,
          alt: 'UNICEF'
        }
      ]
    },
    {
      id: 'medioambiente',
      title: 'Medio Ambiente y Animales',
      colorClass: 'seccion-animales',
      ongs: [
        {
          id: 11,
          nombre: 'Protección Animal Ecuador',
          descripcion: 'Se dedica a rescatar, acoger y proteger animales abandonados o maltratados, principalmente perros y gatos.',
          imagen: paeImg,
          alt: 'PAE'
        },
        {
          id: 12,
          nombre: 'Altropico',
          descripcion: 'Se dedica a la conservación del trópico: biodiversidad, protección de áreas naturales, e investigación ambiental.',
          imagen: altropicoImg,
          alt: 'Altropico'
        },
        {
          id: 13,
          nombre: 'Fondo Mundial Para la Naturaleza',
          descripcion: 'WWF trabaja globalmente para conservar la naturaleza, proteger especies en peligro, preservar ecosistemas críticos y promover desarrollo sostenible.',
          imagen: wwfImg,
          alt: 'WWF'
        }
      ]
    },
    {
      id: 'educacion',
      title: 'Educación',
      colorClass: 'seccion-educacion',
      ongs: [
        {
          id: 14,
          nombre: 'Fundación Children International',
          descripcion: 'Se dedica a trabajar con niños, niñas, adolescentes en zonas vulnerables de Quito (La Magdalena, La Colmena, El Panecillo, etc.)',
          imagen: childrenImg,
          alt: 'Children International'
        },
        {
          id: 15,
          nombre: 'Centro del Muchacho Trabajador',
          descripcion: 'Se dedica a trabajar con niños y niñas que deben trabajar (o trabajan) para ayudar a sus familias; brindar alternativas educativas, sociales y culturales para romper círculos de pobreza.',
          imagen: cmtImg,
          alt: 'Centro del Muchacho Trabajador'
        },
        {
          id: 16,
          nombre: 'Fundación Ecuasol',
          descripcion: 'Dar apoyo a niños y jóvenes de barrios desfavorecidos de Quito para que accedan a educación, inculcando valores humanos, académicos y sociales.',
          imagen: ecuasolImg,
          alt: 'Ecuasol'
        },
        {
          id: 17,
          nombre: 'World Vision Ecuador',
          descripcion: 'Trabajan para eliminar la violencia contra la niñez y adolescencia más vulnerable, enfocándose en áreas como salud, educación y protección.',
          imagen: wveImg,
          alt: 'World Vision Ecuador'
        }
      ]
    }
  ];

  return (
    <section className="ong-container">
      {categorias.map((categoria) => (
        <div key={categoria.id} className={`ong-section ${categoria.colorClass}`}>
  <div className="titulo">
    <h2 className="General">{categoria.title}</h2>
  </div>

  <div className="ongs-grid">
    {categoria.ongs.map((ong) => (
      <div key={ong.id} className={`ong-card ${categoria.id}-info`}>
        <div className="img-fundaciones">
          <img src={ong.imagen} alt={ong.alt} loading="lazy" />
        </div>
        <div className="container-ong">
          <h2 className="subtitulo">{ong.nombre}</h2>
          <p className="texto">{ong.descripcion}</p>
        </div>
      </div>
    ))}
  </div>
</div>

      ))}
    </section>
  );
}

export default ONG;