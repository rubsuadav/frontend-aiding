import React from 'react';

function Error404() {
  return (
    <div className="error404 mt-5">
      <h1>Página no encontrada</h1>
      <p class="zoom-area"><b>Lo sentimos</b> la página a la que intentas acceder, no existe o no tienes los permisos necesarios. </p>
      <section class="error-container">
        <span class="four"><span class="screen-reader-text">4</span></span>
        <span class="zero"><span class="screen-reader-text">0</span></span>
        <span class="zero2"><span class="screen-reader-text">0</span></span>
      </section>
    </div>
  );
}

export default Error404;