import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
} from "mdb-react-ui-kit";
import {volunteers} from "./services/backend.js";
import swal from "sweetalert";
import { Button, Dropdown} from "react-bootstrap";

const successMsgDelete = {
  title: "Mensaje de confirmación",
  text: "El turno se ha borrado correctamente",
  icon: "success",
  button: "Aceptar",
  timer: "5000",
};

const errorMsgDelete = {
  title: "Mensaje de error",
  text: "Se ha producido un error al borrar el turno",
  icon: "error",
  button: "Aceptar",
  timer: "5000",
};

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

  const deleteConfirmationAlert = async () => {
    swal({
      title: "Eliminar turno",
      text: "¿Estás seguro que desea eliminar el turno?",
      icon: "warning",
      buttons: ["No", "Sí"],
    }).then((res) => {
      if (res) {
        deleteTurn();
      }
    });
  };

  const deleteTurn = async () => {
    const result = await volunteers
      .delete(`/turns/${id}`)
      .then((res) => {
        swal(successMsgDelete);
        navigate("/admin/volunteers/turns");
      })
      .catch((err) => {
        swal(errorMsgDelete);
      });
  };

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
        <MDBRow>
          <MDBCol style={{paddingLeft: "30px"}}>
            <MDBCard style={{width: "600px", paddingTop: "17px", paddingBottom: "17px"}}>
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
                  <MDBCardText>Finalización</MDBCardText>
                </MDBCol>
                <MDBCol sm="9">
                  <MDBCardText className="text-muted">
                    {turn.endTime}
                  </MDBCardText>
                </MDBCol>
                </MDBRow>
            </MDBCard>
          </MDBCol>
          <MDBCol style={{paddingLeft: "30px"}}>
            <MDBCard style={{width: "600px"}}>
              <MDBCol style={{paddingTop: "5px"}}>
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
              <MDBCol style={{paddingTop: "5px", paddingBottom: "5px"}}>
                <MDBCardText className="text-muted w-auto">
                  <Button
                    onClick={() => {
                    deleteConfirmationAlert();
                    }}
                    type="button"
                    className="btn btn-danger w-75"
                    >
                      Borrar
                    </Button>
                  </MDBCardText>
              </MDBCol>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        <hr />
      </MDBContainer>
    </section>
  );
}