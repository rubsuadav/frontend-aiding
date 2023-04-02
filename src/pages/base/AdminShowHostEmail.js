import React, { useState, useEffect } from "react";
import { base } from "./services/backend.js";
import swal from "sweetalert";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function ShowHostEmail() {
    let navigate = useNavigate();

    const [hostEmail, setHostEmail] = useState({});

    useEffect(() => {
        getHostEmail();
    }, []);

    const getHostEmail = async () => {
        try {
            const response = await base.get(`/hostEmail/`);
            setHostEmail(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="container my-5 shadow">
            <h1 className="pt-3">Ver cuenta del sistema</h1>

            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="row mb-3">
                        <div className="col-md-6 text-end fw-bold">
                            <label htmlFor="email" className="form-label">
                                Correo del sistema:
                            </label>
                        </div>
                        <div className="col-md-6">
                            <label id="email">{hostEmail.email}</label>
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-md-6 text-end fw-bold">
                            <label htmlFor="is_admin" className="form-label">
                                Contraseña:
                            </label>
                        </div>
                        <div className="col-md-6">
                            <label id="password">{hostEmail.password}</label>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row justify-content-evenly">
                <Button
                    className="col mb-4 mx-5"
                    variant="outline-primary"
                    onClick={() => navigate("/")}
                >
                    Volver
                </Button>
                <Button
                    className="col mb-4 mx-5"
                    variant="outline-primary"
                    onClick={() => navigate("/admin/base/editHostEmail/")}
                >
                    Editar
                </Button>
            </div>
        </div>
    );
}
