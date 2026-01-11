import React from 'react';
import './Promesa.css';

function Promesa() {
  const frase = "“Creemos en un futuro en el que el bienestar de las personas y el equilibrio de la naturaleza vayan de la mano, promoviendo la equidad, la inclusión, la educación de calidad y la sostenibilidad ambiental para todos”";

  return (
    <section className="todas-ong">
      <h2 className="ong-title">nuestra promesa</h2>
      <p className="visiones-frase">{frase}</p>
    </section>
  );
}

export default Promesa;