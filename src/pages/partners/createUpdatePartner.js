import React from "react";
import UpdateCreatePartnerForm from "../../components/forms/updateCreatePartnerForm";
import backendApi from "./services/backend.js";
import swal from 'sweetalert';
import { Link, useNavigate } from "react-router-dom";


function CreateUpdatePartner() {
    let navigate = useNavigate();

    function postPartner(partner){
        const aux = backendApi.post('',partner).then(() => {
            showAlert();
            navigate("/partners");
        });
    };

    const showAlert = async () => {
        swal({
          title: "Mensaje de confirmación",
          text: "Te confirmamos que el socio se ha creado correctamente",
          icon: "success",
          button: "Aceptar",
          timer: "5000",
        });
      };

  return (
    <div>
      <UpdateCreatePartnerForm request={postPartner} />
    </div>
  );
}

export default CreateUpdatePartner;