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
import { Document, Page, PDFViewer, Text, Image, StyleSheet} from "@react-pdf/renderer";

function generateCertificate(user, language, periodicity){
  const styles = StyleSheet.create({
    body:{
      paddingTop: 60,
      paddingBotom: 60,
      paddingHorizontal: 60,
      position: "absolute"
    },
    image:{
      height:70,
      width: 180
    },
    footer:{
      position: "absolute",
      bottom: "30",
      textAlign: "center",
      fontSize: 10,
      fontFamily:"Courier",
      alignSelf: "center"
    },
    stamp:{
      height:120,
      width: 210,
      alignSelf: "center"
    },
    text:{
      fontSize: 10,
      paddingHorizontal: 10,
      paddingVertical: 10
    },
    textSp:{
      fontSize: 10,
      paddingHorizontal: 10,
      paddingVertical: 20,
      alignSelf: "center",
      fontFamily:"Helvetica-Bold"
      
    },
    textStp:{
      fontSize: 10,
      paddingVertical: 20,
      alignSelf: "center"
    }


  });
  if(language == "Español")
    return(
      <Document>
          <Page style={styles.body}>
            <Image src="http://localhost:3000/boscoglobal-logo.png" height="50" style={styles.image}></Image>
            <Text style={styles.text}>Francisco Antonio Echeto Zubiri con DNI 15.801.110 H, Tesorero de la Fundación Bosco Global, con domicilio social en Sevilla, c/ Salesianos 3 A y CIF G-90.196.072</Text>
            <Text style={styles.textSp}>DECLARA</Text>
            <Text style={styles.text}>Que la <Text style={styles.textSp}>Fundación Bosco Global</Text> se encuentra incluida entre las acogidas al régimen de deducciones establecido por la Ley 49/2002, de 23 de diciembre de régimen fiscal de las entidades sin fines lucrativos y de los incentivos fiscales al mecenazgo.</Text>
            <Text style={styles.text}>Que se ha recibido de:</Text>
            <Text>Nombre: {user.name}</Text>
            <Text>Apellido: {user.last_name}</Text>
            <Text>NIF: {user.dni}</Text>
            <Text>Provincia: {user.province}</Text>
            <Text>Perioicidad: {periodicity}</Text>
            <Text style={styles.text}>Que esta cantidad ha sido entregada con carácter de donación pura, simple e irrevocable.</Text>
            <Text style={styles.text}>Que el donativo recibido se ha destinado para el apoyo a los proyectos que la Entidad desarrolla para el cumplimiento de sus fines.</Text>
            <Text style={styles.text}>Sirva el presente documento para que surta los efectos fiscales oportunos.</Text>
            <Text style={styles.textStp}>Sevilla, abril de 2023</Text>
            <Image src="http://localhost:3000/Bosco-sello.png" height="50" style={styles.stamp}></Image>
            <Text style={styles.textStp}>Francisco Antonio Echeto Zubiri</Text>
            <Text style={styles.textStp}>Tesorero de la Fundación Bosco Global</Text>
            <Text style={styles.footer}>C/Salesianos,3A. 41008 Sevilla (España) · T. 954 53 28 27 · info@boscoglobal.org · boscoglobal.org</Text>
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
      <PDFViewer height={"450"}>
        {generateCertificate(user,"Español", donation.periodicity)}         
      </PDFViewer>
    </section>
  );
}
