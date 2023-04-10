import React from 'react';
import {
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardBody,
  } from "mdb-react-ui-kit";
import "../../../css/mapResources.css";
import Accordion from "react-bootstrap/Accordion";

export default function TermsAndPolicies() {
  return (
    <section>
      <MDBContainer className="py-5">
        <MDBRow>
        <MDBCard className="mb-4">
          <MDBCardBody>
            <MDBRow>
              <h1> Términos y Condiciones de Uso de Aiding. </h1>

              <div>
                  <Accordion defaultActiveKey={""}>

                  <br/>
                  <div class="izquierda">
                  <h3>1. Quiénes somos.</h3>
                  <p> Aiding, nuestra plataforma digital que conecta a usuarios con proveedores de servicios de ayuda. Antes de utilizar, por favor léase cuidadosamente los siguientes términos y condiciones de uso, ya que establecen los derechos y obligaciones entre Aiding y los usuarios de la plataforma. </p>
                  </div>
                      <br/>
                  <div class="izquierda">
                  <h3>2. Aceptación de los términos y condiciones.</h3>
                  <p>  Al utilizar la plataforma de Aiding estaría aceptando los términos y condiciones de nuestra web. Concretamente el cumplir con las reglas y políticas de la plataforma. Estas reglas pueden incluir, entre otras cosas, el uso responsable y ético de la plataforma, la prohibición de conductas inapropiadas, la protección de la propiedad intelectual de Aiding y la confidencialidad de la información del usuario. Si no estás de acuerdo con estos términos, por favor no utilices nuestra plataforma.  

Los términos de uso se detallan a continuación:  </p>
                  </div>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header><h4>2.1 Modificaciones de los términos y condiciones.</h4></Accordion.Header>
                      <Accordion.Body>
                        <div class="izquierda">
                          <p> Aiding se reserva el derecho de modificar estos términos y condiciones de uso en cualquier momento. Los usuarios serán notificados de los cambios a través de la plataforma o por correo electrónico. 

Al seguir utilizando la plataforma de Aiding tras el aviso, estaría aceptando el estar sujeto a estos términos y condiciones de uso. Si tienes preguntas o inquietudes sobre estos términos y condiciones, por favor contáctanos a través del siguiente correo electrónico: AidingSevilla@outlook.es </p>
                        </div>
                      </Accordion.Body>
                      </Accordion.Item>
                
                    <br/>
                  <div class="izquierda">
                  <h3>3. Recopilación de información. </h3>
                  <p>Para utilizar los servicios de Aiding, no necesita estar registrado. Sin embargo, para usar algunos de los servicios ofrecidos por Aiding, sí es necesario tener una cuenta, y para ello es imprescindible proporcionar un usuario y contraseña. También, según las funcionalidades contratadas por esta organización, los datos solicitados al usuario pueden variar siendo estos datos más personales.  

Aiding, como empresa desarrolladora de esta página, se compromete a que toda la información proporcionada será tratada y conservada de forma segura de manera que se garantiza la fiabilidad y confianza del usuario. Dado que es la encargada de almacenar los datos solicitados del usuario que utilice la aplicación, se compromete a únicamente solicitar la información y los datos exclusivamente necesarios para el adecuado uso de sus funcionalidades. </p>
                  </div>
                  <Accordion.Item eventKey="6">
                      <Accordion.Header><h4>3.1 Cookies.</h4></Accordion.Header>
                      <Accordion.Body>
                        <div class="izquierda">
                          <p> Utilizamos cookies en nuestro sitio web para mejorar su experiencia de navegación. Las cookies son pequeños archivos de texto que se colocan en su dispositivo cuando visita nuestro sitio web. Estas cookies nos permiten reconocer su dispositivo y personalizar su experiencia en nuestro sitio web. 

Las cookies utilizadas son cookies de refresco (refresh) y de recambio (access). Tanto las cookies "refresh_token" como las "access_token" son utilizadas en el funcionamiento de la autenticación y autorización en sistemas web. El "access_token" es un token que se utiliza para acceder a recursos protegidos en un sistema web, y suele tener una vida útil corta. Por otro lado, el "refresh_token" es un token que se utiliza para obtener un nuevo "access_token" cuando el anterior ha expirado, y suele tener una vida útil más larga que el "access_token". De esta forma, el "refresh_token" permite mantener la sesión iniciada durante un periodo de tiempo prolongado, sin necesidad de que el usuario tenga que volver a iniciar sesión cada vez que el "access_token" caduque. 

Además de estas se utiliza un tipo de cookie llamado “rol” que indica el rol del usuario en cuestión: admin, capitán o supervisor. O si en caso contrario el usuario es anónimo. </p>
                        </div>
                      </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="7">
                      <Accordion.Header><h4>3.2 Sistema de garantía de la privacidad. </h4></Accordion.Header>
                      <Accordion.Body>
                        <div class="izquierda">
                         <p> Principalmente nuestro sistema utiliza HTTPS, un protocolo seguro que cifra la información que se intercambia entre el navegador del usuario y el servidor del sitio web, lo que ayuda a garantizar que terceros no puedan acceder a la información proporcionada por los usuarios. 

En Aiding, nos tomamos muy en serio la protección de los datos personales de nuestros usuarios y clientes. Por esta razón, hemos implementado un sistema de garantía de privacidad que cumple con las leyes y regulaciones de España en cuanto a la protección de datos, seguridad y privacidad. 

Nuestro sistema de garantía de privacidad se basa en el cumplimiento de las obligaciones establecidas en la Ley Orgánica de Protección de Datos Personales y Garantía de Derechos Digitales (LOPDGDD), y en la implementación de medidas técnicas y organizativas adecuadas para garantizar la seguridad de los datos personales de nuestros usuarios y clientes. 

La LOPDGDD es la normativa española que establece las obligaciones y responsabilidades de los responsables de los datos personales, así como los derechos de los titulares de los datos. Por otro lado, el RGPD es una regulación de la Unión Europea que establece un marco normativo armonizado para la protección de datos personales en todo el territorio de la Unión Europea. 

Además, nuestro equipo está comprometido en asegurar que nuestros procesos y sistemas se mantengan actualizados en función de las leyes y regulaciones de protección de datos en vigor. 

Por todo lo anterior, nuestros usuarios y clientes pueden estar seguros de que sus datos personales estarán protegidos y seguros en todo momento, y de que nuestra empresa cumple con los estándares más altos en materia de privacidad y protección de datos. </p>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>

                     <br/>
                  <div class="izquierda">
                  <h3>4. Responsabilidades del usuario. </h3>
                  <p> Los usuarios de Aiding son responsables de la información que proporcionan en su cuenta, y deben asegurarse de que es precisa y actualizada. Los usuarios son responsables de cualquier actividad que ocurra en su cuenta, y deben mantener la seguridad de su cuenta y contraseña. Aun así, ante cualquier incidencia o pérdida de información, se debe de recurrir al servicio de atención al cliente de Aiding para que podamos proporcionarle la mejor solución a la mayor brevedad posible. </p>
                  </div>

                    <br/>
                  <div class="izquierda">
                  <h3>5. Derechos del usuario. </h3>
                  </div>
                  <Accordion.Item eventKey="8">
                      <Accordion.Header><h4>1.1 Derecho al olvido.</h4></Accordion.Header>
                      <Accordion.Body>
                        <div class="izquierda">
                          <p> Los usuarios de Aiding pueden solicitar la eliminación de su información, que en nuestro caso consistirá en una anonimización de sus datos personales en cualquier momento. Aiding se compromete a responder a dichas solicitudes de manera oportuna y a tomar medidas apropiadas para cumplir con ellas.  

Esta solicitud se debe de realizar al correo electrónico de la empresa (AidingSevilla@outlook.es) y nuestro equipo se encargará de eliminar todos los datos que no sean estrictamente necesarios para el correcto funcionamiento de la empresa en un período máximo de 14 días laborables desde su solicitud. </p>
                        </div>
                      </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="9">
                      <Accordion.Header><h4>1.2 Derecho a obtener mis datos.</h4></Accordion.Header>
                      <Accordion.Body>
                        <div class="izquierda">
                         <p> Los usuarios de Aiding pueden solicitar una copia de sus datos personales en cualquier momento mediante petición por correo electrónico. Aiding se compromete a responder a dichas solicitudes de manera oportuna y a proporcionar a los usuarios una copia de sus datos personales en un formato adecuado en un plazo máximo de 14 días laborables desde su solicitud. </p>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>

                  <br/>
                  <div class="izquierda">
                  <h3>6. Responsabilidades y Gestión de contingencias. </h3>
                  <p> El proveedor de servicios no será responsable de ningún daño o pérdida resultante del uso de la página web, incluyendo, pero no limitado a, pérdida de datos, interrupción del negocio o pérdida de beneficios. En nuestra web, tenemos un sólido plan de gestión de contingencias en caso de una brecha de seguridad o incidente relacionado con la protección de datos personales. Si alguna vez ocurre, notificaremos inmediatamente a los usuarios afectados para garantizar una respuesta oportuna y eficaz. Además, realizaremos una investigación exhaustiva para determinar la naturaleza y el alcance del incidente, implementaremos medidas de seguridad adicionales para evitar futuras brechas y trabajaremos con nuestros proveedores para fortalecer aún más nuestras medidas de seguridad.  

Nuestro objetivo es garantizar la máxima protección de los datos personales de nuestros usuarios en todo momento, y nuestro plan de gestión de contingencias está diseñado para lograr precisamente eso. </p>
                  </div>

                  <br/>
                  <div class="izquierda">
                  <h3>7. Riesgos legales de Aiding. </h3>
                  <p> En Aiding somos conscientes de los riesgos legales que conlleva el incumplimiento de las leyes de protección de datos. En caso de no cumplir con la normativa, la empresa puede enfrentar sanciones económicas, multas y daños a su reputación. Además, las empresas pueden enfrentar consecuencias legales, incluyendo demandas judiciales, que pueden resultar en costos significativos y daños a su imagen pública. 

En España, la Ley Orgánica de Protección de Datos Personales y Garantía de Derechos Digitales (LOPDGDD) establece sanciones por infracciones que van desde los 900€ hasta los 20 millones de euros, dependiendo de la gravedad de la infracción cometida. Además, el Reglamento General de Protección de Datos (RGPD) de la Unión Europea establece multas que pueden llegar hasta el 4% de la facturación anual global de la empresa. 

Trabajamos arduamente para garantizar la privacidad y seguridad de los datos personales de nuestros usuarios y clientes, y para minimizar los riesgos legales y de reputación asociados con el incumplimiento de la normativa de protección de datos. </p>
                  </div>

                  <br/>
                  <div class="izquierda">
                  <h3>8. Contacta con nosotros. </h3>
                  <p> Si tiene alguna pregunta sobre nuestros términos de uso o política de privacidad, contáctenos en AidingSevilla@outlook.es. </p>
                  </div>

                          </Accordion>
              
              </div>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
        </MDBRow>    
        <hr />
      </MDBContainer>
    </section>
  );
}
