import React from "react";
import { Document, Page, Text, Image, StyleSheet, View, Link} from "@react-pdf/renderer";

export const styles = StyleSheet.create({
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
  },
  link:{
    color: "red"
  },
  cont:{
    display: "flex",
    flexDirection: "column",
    zIndex: 900,
    width: "100%",
    position: "sticky",
    alignSelf:"center",
    paddingBottom: "10%"
  },
   buttonStyle: {
    backgroundColor: 'red',
    color: '#fff',
    border: '1px solid black',
    borderRadius: '5px',
    padding: '10px'
  },
    menuStyle: {
    backgroundColor: '#fff',
    color: 'black',
    border: '1px solid red',
    borderRadius: '5px',
    padding: '10px'
  }


});

const logo = Image



export function generateCertificate(user, language, donation){
  const text =[];
  let date = new Date();
  if(language == "Español"){
    text[0] = "Francisco Antonio Echeto Zubiri con DNI 15.801.110 H, Tesorero de la Fundación Bosco Global, con domicilio social en Sevilla, c/ Salesianos 3 A y CIF G-90.196.072"
    text[1] = "DECLARA"
    text[2] = "Que la "
    text[3] = "Fundación Bosco Global"
    text[4] = "se encuentra incluida entre las acogidas al régimen de deducciones establecido por la Ley 49/2002, de 23 de diciembre de régimen fiscal de las entidades sin fines lucrativos y de los incentivos fiscales al mecenazgo."
    text[5] = "Que se ha recibido de:"
    text[6] = "Nombre"
    text[7] = "Importe total del donativo en"
    text[8] = "Que esta cantidad ha sido entregada con carácter de donación pura, simple e irrevocable."
    text[9] = "Que el donativo recibido se ha destinado para el apoyo a los proyectos que la Entidad desarrolla para el cumplimiento de sus fines."
    text[10] = "Sirva el presente documento para que surta los efectos fiscales oportunos."
    text[11] = Intl.DateTimeFormat("es-ES", { month: "long" }).format(date) + " de"
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
    text[7] = "Import total del donatiu el"
    text[8] = "Que aquesta quantitat ha estat lliurada amb caràcter de donació pura, simple i irrevocable."
    text[9] = "Que el donatiu rebut s'ha destinat per al suport als projectes que l'Entitat desenvolupa per al compliment dels seus fins."
    text[10] = "Serveixi aquest document perquè tingui els efectes fiscals oportuns."
    text[11] = Intl.DateTimeFormat("ca-ES", { month: "long" }).format(date) + " de"
    text[12] = "Tresorer de la Fundació Bosco Global"
  }
  return(
    <Document>
        <Page style={styles.body}>          
          <Image src="../../boscoglobal-logo.png" height="50" style={styles.image}></Image>
          <Text style={styles.textTop}>{text[0]}</Text>
          <Text style={styles.textSp}>{text[1]}</Text>
          <Text style={styles.text}>{text[2]}<Text style={styles.textSp}>{text[3]}</Text> {text[4]}</Text>
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
                    <Text style={styles.text}>{text[7]} {date.getFullYear() -1} (euros)</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.text}>{donation}</Text>
                  </View>
                </View>
              </View>
          </View>
          <Text style={styles.text}>{text[8]}</Text>
          <Text style={styles.text}>{text[9]}</Text>
          <Text style={styles.text}>{text[10]}</Text>
          <Text style={styles.textStp}>Sevilla, {text[11]} {date.getFullYear()}</Text>
          <Image src="../../Bosco-sello.png" height="50" style={styles.stamp}></Image>
          <Text style={styles.textBtm}>Francisco Antonio Echeto Zubiri</Text>
          <Text style={styles.textBtm}>{text[12]}</Text>
          <Text style={styles.footer}>C/Salesianos,3A. 41008 Sevilla (España) · T. 954 53 28 27 · info@boscoglobal.org · <Link src="https://boscoglobal.org/" style={styles.link}>boscoglobal.org</Link></Text>
        </Page>
    </Document>
  )


}

export default function Certificate() {
  
  
}
