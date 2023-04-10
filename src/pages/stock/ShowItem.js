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
import { items, tiposBE } from "./services/backend.js";
import swal from "sweetalert";
import { Button } from "react-bootstrap";
import { Badge } from "antd";

export default function Details() {
  let navigate = useNavigate();

  /**Establecer item */
  const [item, setItem] = useState({
    name: "...",
    description: "...",
    quantity: "...",
    type: '...',
  });

  const { id } = useParams();

  const successMsg = {
    title: "Mensaje de confirmación",
    text: "El item se ha borrado correctamente",
    icon: "success",
    button: "Aceptar",
    timer: "5000",
  };

  const errorMsg = {
    title: "Mensaje de error",
    text: "Se ha producido un error al borrar el item",
    icon: "error",
    button: "Aceptar",
    timer: "5000",
  };

  const deleteConfirmationAlert = async () => {
    swal({
      title: "Eliminar item",
      text: "¿Estás seguro que desea eliminar el item?",
      icon: "warning",
      buttons: ["No", "Sí"],
    }).then((res) => {
      if (res) {
        deleteItem();
      }
    });
  };

  const deleteItem = async () => {
    const result = await items
      .delete(`/${id}`)
      .then((res) => {
        swal(successMsg);
        navigate("/admin/stock/items");
      })
      .catch((err) => {
        swal(errorMsg);
      });
  };

  function getTypeName(typeId) {
    const type = types.find((t) => t.id === typeId);
    return type ? type.name : '';
  }

  const [types, setTypes] = React.useState([]);

  function getTipos() {
    tiposBE
      .get("")
      .then((response) => {
        setTypes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadItem();
    getTipos();
  }, []);

  /** Llamada a la API */
  const loadItem = async () => {
    const result = await items.get(`/${id}`);
    setItem(result.data);
  };

  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      type="button"
      id="button"
      className="btn btn-light w-100"
    >
      {children}
      &#x25bc;
    </a>
  ));

  const CustomMenu = React.forwardRef(
    ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
      const [value, setValue] = useState("");

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
                !value || child.props.children.toLowerCase().startsWith(value)
            )}
          </ul>
        </div>
      );
    }
  );

  return (
    <section>
      <MDBContainer className="py-5">
        <center>
          <h2>{item.name}</h2>
        </center>
        <hr />
        <MDBRow>
          <MDBCol md="8">
            <MDBRow>
              <MDBCol md="12">
                <Badge.Ribbon text="Datos del Item" color="purple">
                  <MDBCard className="mb-3">
                    <MDBCardBody>
                      <MDBRow>
                        <MDBCol md="12">
                          <MDBCardText>
                            <strong>Cantidad</strong>
                          </MDBCardText>
                        </MDBCol>
                        <MDBCol md="12">
                          <MDBCardText className="text-muted">
                            {item.quantity}
                          </MDBCardText>
                        </MDBCol>
                      </MDBRow>
                      <hr />
                      <MDBRow>
                        <MDBCol md="12">
                          <MDBCardText>
                            <strong>Descripción</strong>
                          </MDBCardText>
                        </MDBCol>
                        <MDBCol md="12">
                          <MDBCardText className="text-muted">
                            {item.description}
                          </MDBCardText>
                        </MDBCol>
                      </MDBRow>
                      <hr />
                      <MDBRow>
                        <MDBCol md="12">
                          <MDBCardText>
                            <strong>Tipo</strong>
                          </MDBCardText>
                        </MDBCol>
                        <MDBCol md="12">
                          <MDBCardText className="text-muted">
                            {getTypeName(item.type_id)}
                          </MDBCardText>
                        </MDBCol>
                      </MDBRow>
                      <hr />
                    </MDBCardBody>
                  </MDBCard>
                </Badge.Ribbon>
              </MDBCol>
            </MDBRow>
          </MDBCol>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol>
                    <MDBCardText className="text-muted w-auto">
                      <Button
                        onClick={() => {
                          deleteConfirmationAlert();
                        }}
                        type="button"
                        className="btn btn-danger w-100"
                      >
                        Eliminar Item
                      </Button>
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol>
                    <MDBCardText className="text-muted w-auto">
                      <Button
                        onClick={() => {
                          navigate(`/admin/stock/items/update/${id}`);
                        }}
                        type="button"
                        className="btn btn-light w-100"
                      >
                        Editar Item
                      </Button>
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
