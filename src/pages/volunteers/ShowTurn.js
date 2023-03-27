import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
} from "mdb-react-ui-kit";
import {volunteers} from "./services/backend.js";
import { PDFViewer} from "@react-pdf/renderer";
import { Button, Dropdown} from "react-bootstrap";
import { Badge, Tag } from 'antd';
import Modal from 'react-bootstrap/Modal';
import Form from "react-bootstrap/Form";
import ButtonR from "react-bootstrap/Button";

export default function Details() {
  let navigate = useNavigate();

  const [turn, setTurn] = useState({
    date: "",
    startTime: "",
    endTime: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadTurn();
  }, []);

  const loadTurn = async () => {
    const result = await volunteers.get(`turns/${id}/`);
    setTurn(result.data);
  };

  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      type="button" id="button" className="btn btn-light w-100"
    >
      {children}
      &#x25bc;
    </a>
  ));

  const CustomMenu = React.forwardRef(
    ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
      const [value, setValue] = useState('');
      return (
        <div
          ref={ref}
          style={style}
          className={className}
          aria-labelledby={labeledBy}
        >
          <ul className="list-unstyled">
            {React.Children.toArray(children).filter(
              (child) =>
                !value || child.props.children.toLowerCase().startsWith(value),
            )}
          </ul>
        </div>
      );
    },
  );

  return (
    <section>
      <MDBContainer className="py-5">
        <center>
          <h2>
          Turno
          </h2>
        </center>
        <MDBCard>
          <MDBRow>
            <MDBCol sm="3">
              <MDBCardText>Fecha</MDBCardText>
            </MDBCol>
            <MDBCol sm="9">
              <MDBCardText className="text-muted">
                {turn.date}
              </MDBCardText>
            </MDBCol>
            </MDBRow>
            <hr />
            <MDBRow>
            <MDBCol sm="3">
              <MDBCardText>Hora de Inicio</MDBCardText>
            </MDBCol>
            <MDBCol sm="9">
              <MDBCardText className="text-muted">
                {turn.startTime}
              </MDBCardText>
            </MDBCol>
            </MDBRow>
            <hr />
            <MDBRow>
            <MDBCol sm="3">
              <MDBCardText>Hora de Finalización</MDBCardText>
            </MDBCol>
            <MDBCol sm="9">
              <MDBCardText className="text-muted">
                {turn.endTime}
              </MDBCardText>
            </MDBCol>
            </MDBRow>
        </MDBCard>
        <hr />
          <MDBRow>
            <MDBCol>
              <MDBCardText className="text-muted w-auto">
                <Button
                  onClick={() => {navigate(`/admin/volunteers/turns/update/${id}`)}}
                  type="button" id="button" 
                  className="btn btn-light w-75"
                  >
                  Editar turno
                </Button>
              </MDBCardText>
            </MDBCol>
          </MDBRow>
      </MDBContainer>
    </section>
  );
}