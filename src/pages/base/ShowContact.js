import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {contacts} from "./services/backend.js";

const ContactDetail = () => {
  const { id } = useParams();
  const [contact, setContact] = useState(null);

  useEffect(() => {
    contacts.get(id).then((response) => {
      setContact(response.data);
    });
  }, [id]);

  if (!contact) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="container">
      <h2>{contact.name}</h2>
      <p>Email: {contact.email}</p>
      <p>Asunto: {contact.subject}</p>
      <p>Fecha: {contact.datetime}</p>
      <p>Mensaje: {contact.message} </p>
      <p>Respondido: {contact.isAnswered ? 'Sí' : 'No'}</p>
    </div>
  );
};

export default ContactDetail;

