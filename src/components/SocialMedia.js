import React from "react";

export default function SocialMedia() {
  const tweetText = "¿Necesitas una página web a medida para tu negocio? Con Aiding puedes tener la tuya en un abrir y cerrar de ojos. Echa un vistazo a nuestra página de ejemplo: https://aiding-383619.ew.r.appspot.com/ y descubre lo que podemos hacer por ti. ¡Visítanos en https://aiding-web.vercel.app/ para saber más!";
  const url = `https://twitter.com/intent/tweet?text=${tweetText}`;

  return (
    <a href={url}>
      <button>Compartir en Twitter</button>
    </a>
  );
}
