import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      console.log('Formulario enviado:', formData);
      setIsSubmitting(false);
      setSubmitMessage('¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.');
      
      setFormData({
        nombre: '',
        email: '',
        mensaje: ''
      });
      
      setTimeout(() => setSubmitMessage(''), 5000);
    }, 1000);
  };

  return (
    <section className="formulario-mapa container">
      <div className="formulario">
        <h2>Contáctanos</h2>
        
        {submitMessage && (
          <div className="success-message">{submitMessage}</div>
        )}
        
        <form onSubmit={handleSubmit} id="contact-form" noValidate>
          <div className="form-group">
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              aria-required="true"
              placeholder="Ingresa tu nombre completo"
              disabled={isSubmitting}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              aria-required="true"
              placeholder="ejemplo@correo.com"
              disabled={isSubmitting}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="mensaje">Mensaje:</label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              rows="5"
              required
              aria-required="true"
              placeholder="Escribe tu mensaje aquí..."
              disabled={isSubmitting}
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            className="submit-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Enviando...' : 'Enviar'}
          </button>
        </form>
      </div>
      
      <div className="mapa">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.791402360867!2d-78.49050412522364!3d-0.21046629978745368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59b39ddb5818d%3A0x576fed51155f18c1!2sESFOT%20-%20Aula14!5e0!3m2!1ses!2sec!4v1762704495528!5m2!1ses!2sec"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación de ESFOT - Aula14 en Google Maps"
        ></iframe>
      </div>
    </section>
  );
}

export default Contact;