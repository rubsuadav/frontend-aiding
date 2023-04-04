import React from 'react';
import {
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardBody,
  } from "mdb-react-ui-kit";
import "../../../css/mapResources.css";
import Accordion from "react-bootstrap/Accordion";

export default function SLAs() {
    return (
        <section>
          <MDBContainer className="py-5">
            <MDBRow>
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <h1> Acuerdo Nivel de Servicio (SLAs) </h1>

                  <div>
                      <Accordion defaultActiveKey={""}>

                      <br/>
                      <div class="izquierda">
                      <h3>1. Objetivo del Acuerdo de Nivel de Servicio.</h3>
                      <p> Este Acuerdo de Nivel de Servicio (SLA) establece los términos y condiciones bajo los cuales se proporciona el servicio por parte de Aiding. El objetivo de este SLA es definir los niveles de servicio que el proveedor de servicios se compromete a proporcionar a sus clientes, y establecer los procedimientos a seguir para resolver cualquier problema relacionado con el servicio. </p>
                      </div>
                        <Accordion.Item eventKey="1">
                          <Accordion.Header><h4>1.1 Partes interesadas</h4></Accordion.Header>
                          <Accordion.Body>
                            <div class="izquierda">
                              <p> Este Acuerdo de Nivel de Servicio es un contrato entre Aiding y el cliente que contrata sus servicios. </p>
                            </div>
                          </Accordion.Body>
                          </Accordion.Item>

                          <Accordion.Item eventKey="2">
                          <Accordion.Header><h4>1.2 Duración</h4></Accordion.Header>
                          <Accordion.Body>
                            <div class="izquierda">
                             <p> El acuerdo del cliente con la organización Aiding estará en vigor hasta el día XX/YY/2023. </p>
                            </div>
                          </Accordion.Body>
                        </Accordion.Item>

                        <br/>
                      <div class="izquierda">
                      <h3>2. Servicios que se ofrecen.</h3>
                      <p>  En esta sección se detallan los servicios, las posibles exclusiones y el alcance objetivo. </p>
                      </div>
                        <Accordion.Item eventKey="3">
                          <Accordion.Header><h4>2.1 Descripción de los servicios.</h4></Accordion.Header>
                          <Accordion.Body>
                            <div class="izquierda">
                              <p> Aiding proporciona servicios de diseño y desarrollo de sitios web personalizados a sus clientes. Estos servicios se brindan mediante diferentes módulos, que se seleccionan según las necesidades del cliente. Los detalles de los servicios se especificarán en el contrato de servicios que se firme entre Aiding y el cliente. </p>
                            </div>
                          </Accordion.Body>
                          </Accordion.Item>
                         
                          <Accordion.Item eventKey="4">
                          <Accordion.Header><h4>2.2 Exclusiones.</h4></Accordion.Header>
                          <Accordion.Body>
                            <div class="izquierda">
                             <p> Este acuerdo no se aplicará a ningún servicio que no esté incluido en el contrato de servicios firmado entre Aiding y el cliente. </p>
                            </div>
                          </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="5">
                          <Accordion.Header><h4>2.3 Alcance.</h4></Accordion.Header>
                          <Accordion.Body>
                            <div class="izquierda">
                             <p> El proveedor de servicios se compromete a proporcionar los servicios de la página web de acuerdo con los términos y condiciones establecidos en este documento. </p>
                            </div>
                          </Accordion.Body>
                        </Accordion.Item>

                        <br/>
                      <div class="izquierda">
                      <h3>3. Métricas de medición para acompañar el desempeño.</h3>
                      <p> Aiding se compromete a medir el desempeño de los servicios prestados a sus clientes de acuerdo con las siguientes métricas: </p>
                      </div>
                      <Accordion.Item eventKey="6">
                          <Accordion.Header><h4>3.1 Disponibilidad de la página web.</h4></Accordion.Header>
                          <Accordion.Body>
                            <div class="izquierda">
                              <p> El proveedor de servicios se compromete a proporcionar una disponibilidad del servicio del 99,9% para la página web. Esto significa que la página web estará disponible para su uso durante el 99,9% del tiempo en un mes dado, excluyendo los tiempos de soporte técnico que puedan ser proclamados. </p>
                            </div>
                          </Accordion.Body>
                          </Accordion.Item>

                          <Accordion.Item eventKey="7">
                          <Accordion.Header><h4>3.2 Tiempo de respuesta. </h4></Accordion.Header>
                          <Accordion.Body>
                            <div class="izquierda">
                             <p> El proveedor de servicios se compromete a proporcionar un tiempo de respuesta para la página web de no más de 4 segundos para la carga de la página y no más de 8 segundos para el procesamiento de datos. </p>
                            </div>
                          </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="8">
                          <Accordion.Header><h4>3.3 Soporte Técnico. </h4></Accordion.Header>
                          <Accordion.Body>
                            <div class="izquierda">
                             <p> El proveedor de servicios ofrece dos niveles de soporte técnico: 

Servicio Estándar: El soporte técnico se proporcionará a través de correo electrónico y teléfono durante las horas de oficina estándar (de 9:00 a.m. a 17:00 hora local) y las solicitudes de soporte técnico serán respondidas dentro de las 48 horas posteriores a la recepción de la solicitud. 

Servicio Premium: El soporte técnico se proporcionará a través de correo electrónico y teléfono durante las horas de oficina estándar (de 9:00 a.m. a 17:00 hora local). Las solicitudes de soporte técnico serán respondidas dentro de las 24 horas posteriores a la recepción de la solicitud. </p>
                            </div>
                          </Accordion.Body>
                        </Accordion.Item>

                        <br/>
                      <div class="izquierda">
                      <h3>4. Compensación por incumplimiento del SLA.</h3>
                      <p> En el caso de que el proveedor de servicios no cumpla con los términos y condiciones establecidos en este SLA, el proveedor de servicios proporcionará una compensación en forma de módulos extra a los clientes afectados. La compensación se proporcionará en función del tiempo de inactividad y la duración del incumplimiento.  </p>
                      </div>

                        <br/>
                      <div class="izquierda">
                      <h3>5. Terminación del Acuerdo. </h3>
                      <p> Cualquiera de las partes puede terminar este SLA en cualquier momento mediante notificación por escrito a la otra parte.  </p>
                      </div>

                      <br/>
                      <div class="izquierda">
                      <h3>6. Responsabilidad y gestión de contingencias. </h3>
                      <p> El proveedor de servicios no será responsable de ningún daño o pérdida resultante del uso de la página web, incluyendo, pero no limitado a, pérdida de datos, interrupción del negocio o pérdida de beneficios. 
                      En nuestra web, tenemos un sólido plan de gestión de contingencias en caso de una brecha de seguridad o incidente relacionado con la protección de datos personales. Si alguna vez ocurre, notificaremos inmediatamente a los usuarios afectados para garantizar una respuesta oportuna y eficaz. Además, realizaremos una investigación exhaustiva para determinar la naturaleza y el alcance del incidente, implementaremos medidas de seguridad adicionales para evitar futuras brechas y trabajaremos con nuestros proveedores para fortalecer aún más nuestras medidas de seguridad.  

Nuestro objetivo es garantizar la máxima protección de los datos personales de nuestros usuarios en todo momento, y nuestro plan de gestión de contingencias está diseñado para lograr precisamente eso.  </p>
                      </div>

                      <br/>
                      <div class="izquierda">
                      <h3>7. Identificación del contrato de cliente. </h3>
                      <p> Cada uno de nuestros clientes en Aiding tendrá un código único alfanumérico que les permitirá identificar su contrato de forma clara y precisa. Este código se construirá siguiendo un patrón estandarizado que garantiza la facilidad de uso y acceso.  

Este patrón consta del acrónimo de nuestra empresa, "AS- G6", seguido del identificador de la organización del cliente, el número de cliente expresado en base decimal con un mínimo de cuatro dígitos, rellenando con ceros a la izquierda si fuera necesario, y finalmente, la fecha de firma del contrato, indicada por año, mes y día en ese orden.  

Como ejemplo, si el cliente número 45 firma un contrato con nosotros el 10 de mayo de 2023, su código de contrato será AS-G6-0045-20220510. </p>
                      </div>

                      <br/>
                      <div class="izquierda">
                      <h3>8. Aceptación. </h3>
                      <p> Este Acuerdo de Nivel de Servicio se considerará aceptado por el cliente en el momento en que se contraten los servicios de la página web. </p>
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
    