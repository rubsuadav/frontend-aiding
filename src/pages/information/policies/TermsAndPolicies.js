import React, { useState } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
  } from "mdb-react-ui-kit";
import { useParams, useNavigate } from "react-router-dom";

export default function TermsAndPolicies() {
    let navigate = useNavigate();
    return (
        <section>
          <MDBContainer className="py-5">
            <MDBRow>
            <MDBCol lg="6">
                <MDBCard className="mb-4">
                  <MDBCardBody>
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Título</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">AÑADIR TÍTULO</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
    
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Descripción</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">
                          AÑADIR DESCRIPCIÓN
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
    
    
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Comentarios adicionales</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">
                          otro
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
    
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>    
            <hr />
          </MDBContainer>
        </section>
      );
    }
    