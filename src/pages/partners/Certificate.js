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
import Communication from "./Communications.js";
import {partners, fileUrl} from "./services/backend.js";
import { Document, Page, PDFViewer, Text } from "@react-pdf/renderer";

function generateCertificate(user, language){
  
  if(language == "Español")
    return(
      <Document>
          <Page>
            <Text>español</Text>
            <Text>{user.name}</Text>
            <Text>{user.dni}</Text>
          </Page>
      </Document>
    )
  else
  return(
    <Document>
        <Page>
          <Text>Catalán</Text>
          <Text>{user.name}</Text>
          <Text>{user.dni}</Text>
        </Page>
    </Document>
  )


}

export default function Certificate() {
  let navigate = useNavigate();

  /**Establecer usuario */
  const [user, setUser] = useState({
    dni: "",
    name: "",
    last_name: "",
    email: "",
    state: "",
    phone1: "",
    province: "",
    iban: "",
    phone2: "",
    birthdate: "",
    sex: "",
    address: "",
    postal_code: "",
    township: "",
    language: "",
    account_holder: "",
    state: "",
  });

  const [donation, setDonation] = useState({
    date: "",
    amount: "",
    periodicity: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
    loadDonation();
  }, []);

  const loadUser = async () => {
    const result = await partners.get(`/${id}`);
    setUser(result.data);
  };

  function createCommunicationRedirect(){
    navigate(`/partners/${id}/communication/create`);
  }

  function createDonationRedirect(){
    navigate(`/partners/${id}/donation/create`);
  }
  
  const loadDonation = async () => {
    const result = await partners.get(`/${id}/donation`);
    setDonation(result.data);
  };

  



  return (
    <section>
      <div>
      <button onClick={generateCertificate(user, "Español")}>Español</button>
    </div>
    <div>
      <button onClick={generateCertificate(user, "Catalán")}>Catalán</button>
    </div>
      <PDFViewer>
        {generateCertificate(user,"Español")}         
      </PDFViewer>
    </section>
  );
}
