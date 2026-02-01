import React from 'react'
import { dbFirebase } from '../firebase';
import {collection, getDocs} from "firebase/firestore";
import { useEffect, useState } from "react";
import './FundacionesNuevas.css';
function FundacionesNuevas() {
    const [fundaciones, setFundaciones] = useState([]);
useEffect(() => {
    const getFundaciones = async () => {
        try {
            const snapshot = await getDocs(collection(dbFirebase, "fundaciones"));
            const docs = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setFundaciones(docs);
        } catch (error) {
            console.error("Error al obtener registros:", error);
        }
    };

    getFundaciones();
}, []);

  return (
    <div className="fundaciones-nuevas">
      <h1 className='titulo-fundaciones'>Fundaciones Nuevas</h1>
      <ul className='cards-containerNuevas'>
  {fundaciones.map((fundacion) => (
    <li key={fundacion.id} className="foundation-cardNuevas">
      <div className="route-info">
        <p><strong>Nombre ONG:</strong></p>
        <p>{fundacion.nombre}</p>
        <p><strong>Meta de Recaudación:</strong></p>
        <p>${Number(fundacion.precio).toFixed(2)}</p>
        <p><strong>Descripción / Misión:</strong></p>
        <p>{fundacion.descripcion}</p>
      </div>
    </li>
  ))}
</ul>

    </div>
  )
}

export default FundacionesNuevas