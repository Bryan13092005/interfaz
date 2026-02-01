import React from 'react';
import './Promesa.css';

function Promesa() {
  return (
    <section className="promesa-banner">
      <div className="promesa-contenido">
        <h2 className="promesa-titulo efecto-brillo">NUESTRA PROMESA</h2>
        <div className="promesa-frase-contenedor">
          <p className="promesa-texto">
            “Creemos en un futuro en el que el bienestar de las personas y el equilibrio de la naturaleza vayan de la mano, promoviendo la equidad, la inclusión, la educación de calidad y la sostenibilidad ambiental para todos”
          </p>
        </div>
      </div>
    </section>
  );
}

export default Promesa;