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
import { Document, Page, PDFViewer, Text, Image, StyleSheet, View} from "@react-pdf/renderer";

function generateCertificate(user, language, amount){
  const styles = StyleSheet.create({
    body:{
      paddingTop: 60,
      paddingBotom: 60,
      paddingHorizontal: 60,
      position: "absolute"
    },
    image:{
      height:80,
      width: 180,
    },
    footer:{
      position: "absolute",
      bottom: "30",
      textAlign: "center",
      fontSize: 8,
      fontFamily:"Courier",
      alignSelf: "center"
    },
    stamp:{
      height:70,
      width: 130,
      alignSelf: "center"
    },
    text:{
      fontSize: 10,
      paddingHorizontal: 10,
      paddingVertical: 5
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
    },
    textBtm:{
      fontSize: 10,
      alignSelf: "center"
    },
    textTop:{
      fontSize: 10,
      paddingTop: 40,
      paddingBottom: 10,
      alignSelf: "center"
    },
    section: {
      margin: 10,
      padding: 10,
    },
    table: {
      display: "table",
      width: "auto",
      borderStyle: "solid",
      borderBottomWidth: 2,
      borderLeftWidth:2,
      borderColor: "#000000",
      borderStyle: "solid",
      borderColor: "#000000",
    },
    tableRow: {
      flexDirection: "row",
      borderStyle: "solid",
      borderTopWidth: 2,
      borderColor: "#000000",
      width: "100%"
    },
    tableCol: {
      borderStyle: "solid",
      borderRightWidth:2,
      borderColor: "#000000",
      width: "100%"
      
    },
    tableCellHeader: {
      margin: "auto",
      borderBottomColor: "#000000",
      borderBottomWidth: 1,
      textAlign: "center",
      fontWeight: "bold"
    },
    tableCell: {
      margin: "auto",
      textAlign: "center",
    }


  });
  const text =[]
  if(language == "Español"){
    text[0] = "Francisco Antonio Echeto Zubiri con DNI 15.801.110 H, Tesorero de la Fundación Bosco Global, con domicilio social en Sevilla, c/ Salesianos 3 A y CIF G-90.196.072"
    text[1] = "DECLARA"
    text[2] = "Que la "
    text[3] = "Fundación Bosco Global"
    text[4] = "se encuentra incluida entre las acogidas al régimen de deducciones establecido por la Ley 49/2002, de 23 de diciembre de régimen fiscal de las entidades sin fines lucrativos y de los incentivos fiscales al mecenazgo."
    text[5] = "Que se ha recibido de:"
    text[6] = "Nombre"
    text[7] = "Importe total del donativo en 2022 (euros) "
    text[8] = "Que esta cantidad ha sido entregada con carácter de donación pura, simple e irrevocable."
    text[9] = "Que el donativo recibido se ha destinado para el apoyo a los proyectos que la Entidad desarrolla para el cumplimiento de sus fines."
    text[10] = "Sirva el presente documento para que surta los efectos fiscales oportunos."
    text[11] = "abril de 2023"
    text[12] = "Tesorero de la Fundación Bosco Global"
  }
  else{
    text[0] = "Francisco Antonio Echeto Zubiri amb DNI 15.801.110 H, Tresorer de la Fundació Bosco Global, amb domicili social a Sevilla, c/ Salesians 3 A i CIF G-90.196.072"
    text[1] = "DECLARA"
    text[2] = "Que la "
    text[3] = "Fundació Bosco Global "
    text[4] = "està inclosa entre les acollides al règim de deduccions establert per la Llei 49/2002, de 23 de desembre de règim fiscal de les entitats sense fins lucratius i dels incentius fiscals al mecenatge."
    text[5] = "Que s'ha rebut de:"
    text[6] = "Nom"
    text[7] = "Import total del donatiu el 2022 (euros)	"
    text[8] = "Que aquesta quantitat ha estat lliurada amb caràcter de donació pura, simple i irrevocable."
    text[9] = "Que el donatiu rebut s'ha destinat per al suport als projectes que l'Entitat desenvolupa per al compliment dels seus fins."
    text[10] = "Serveixi aquest document perquè tingui els efectes fiscals oportuns."
    text[11] = "abril de 2023"
    text[12] = "Tresorer de la Fundació Bosco Global"
  }
  return(
    <Document>
        <Page style={styles.body}>
          <Image src="http://localhost:3000/boscoglobal-logo.png" height="50" style={styles.image}></Image>
          <Text style={styles.textTop}>{text[0]}</Text>
          <Text style={styles.textSp}>{text[1]}</Text>
          <Text style={styles.text}>{text[2]}<Text style={styles.textSp}>{text[3]}</Text>{text[4]}</Text>
          <Text style={styles.text}>{text[5]}</Text>
          <View style={styles.section}>
              <View style={styles.table}> 
                <View style={styles.tableRow}>
                  <View style={styles.tableCol}>
                    <Text style={styles.text}>{text[6]}</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.text}>{user.name} {user.last_name}</Text>
                  </View>
                </View>
                <View style={styles.tableRow}>
                  <View style={styles.tableCol}>
                    <Text style={styles.text}>NIF</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.text}>{user.dni}</Text>
                  </View>
                </View>
                <View style={styles.tableRow}>
                  <View style={styles.tableCol}>
                    <Text style={styles.text}>{text[7]}</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.text}>{amount}</Text>
                  </View>
                </View>
              </View>
          </View>
          <Text style={styles.text}>{text[8]}</Text>
          <Text style={styles.text}>{text[9]}</Text>
          <Text style={styles.text}>{text[10]}</Text>
          <Text style={styles.textStp}>Sevilla, {text[11]} </Text>
          <Image src="http://localhost:3000/Bosco-sello.png" height="50" style={styles.stamp}></Image>
          <Text style={styles.textBtm}>Francisco Antonio Echeto Zubiri</Text>
          <Text style={styles.textBtm}>{text[12]}</Text>
          <Text style={styles.footer}>C/Salesianos,3A. 41008 Sevilla (España) · T. 954 53 28 27 · info@boscoglobal.org · boscoglobal.org</Text>
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
        {generateCertificate(user,"Español", donation.amount)}         
      </PDFViewer>
      <PDFViewer height={"450"}>
        {generateCertificate(user,"Catalá", donation.amount)}         
      </PDFViewer>
    </section>
  );
}
