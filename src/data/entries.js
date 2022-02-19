import React from "react";
import { Paragraph } from "../components/article/paragraph";
import AMLO from "../data/LO.jpg";

const StrongText = (props) => {
  return (<span style={{
    fontWeight: 'bold'
  }} >{props.children}</span>)
}

const MarkText = (props) => {
  return (<mark style={{fontWeight: 'mark', borderRadius: '20px'}}>{props.children}</mark>
  )
}

const LinkText = (props) => {
  return (<a href="www.google.com">{props.children}</a>
  )
}

const CursiveText = (props) => {
  return (<em>{props.children}</em>)
}

const ImgAmlo = (props) => {
  return (<img src={AMLO}>{props.children}</img>)
}


export const posts = [{
  title: "Afirma AMLO que tiene pruebas de los ingresos de Loret de Mola; “y tengo más”, dice",
  subtitle: "El presidente Andrés Manuel López Obrador aseguró que pese a que tiene las pruebas, el Inai no lo deja darlas a conocer",
  author: {
      media: "el Universal",
      person: "Luis Cruz",
  },
  // developing: "El presidente Andrés Manuel López Obrador aseguró este miércoles que si afirma que el periodista Carlos Loret de Mola recibió ingresos por 35 millones de pesos es porque tiene pruebas y tengo más. En conferencia de prensa matutina, el titular del Ejecutivo federal aseguró que pese a que tiene las pruebas, el  Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales (Inai) no lo deja.  ",
  // developing2: "Aseguró que la plataforma Latinus está relacionada con el exgoberndor de Tabasco, Roberto Madrazo",
  // developing3: "“Está de por medio el interés nacional. Imagínense habían 10 empresas que le vendían al gobierno 100 mil millones de pesos en medicinas y equipos médicos y una de estas tiene que ver con Latinus, que tiene que ver con Roberto Madrazo. Es una relación de complicidad de medios, políticos corruptos, y les molesta mucho lo nuestro, pero como decía Melchor Ocampo `me quiebro pero no me doblo´. Vamos para adelante, vamos a limpiar al país  de corrupción y sin autoritarismo, sin censura, debate, argumentos, y pruebas”.",
  // developing4: "Cuando hablo de que el señor Loret de Mola  recibió el año pasado 35 millones, pues es porque tengo las pruebas, nada más que no me deja el Inai darlas a conocer y tengo más”, dijo.",
  // developing5: "Ayer, en un hecho sin precedente, el presidente López Obrador solicitó de manera formal al Inai que haga una investigación sobre los ingresos, bienes y origen de la riqueza del periodista Carlos Loret de Mola, socios y su familia.",
  paragraphs: [(<Paragraph id='unico'>
    <div><p style={{ textAlign: 'justify'}}>El presidente <StrongText>Andrés Manuel López Obrador</StrongText> aseguró este miércoles que si afirma que el <LinkText>Carlos Loret</LinkText>periodista Carlos Loret de Mola recibió ingresos por <CursiveText>35 millones de pesos</CursiveText>35 millones de pesos es porque tiene pruebas y tengo más. En conferencia de prensa matutina, el titular del Ejecutivo federal aseguró que pese a que tiene las pruebas, el  Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales (Inai) no lo deja. </p></div>
    <br/>
    Aseguró que la plataforma <strike>Latinus</strike>  está relacionada con el exgoberndor de Tabasco, <StrongText>Roberto Madrazo</StrongText> 
    <br/>
    <div><p style={{ textAlign: 'justify'}}>“Está de por medio el interés nacional. Imagínense habían <MarkText>10 empresas</MarkText> que le vendían al gobierno <StrongText>100 mil millones de pesos</StrongText> en medicinas y equipos médicos y una de estas tiene que ver con Latinus, que tiene que ver con Roberto Madrazo. Es una relación de complicidad de medios, políticos corruptos, y les molesta mucho lo nuestro, pero como decía Melchor Ocampo me quiebro pero no me doblo. Vamos para adelante, vamos a limpiar al país  de corrupción y sin autoritarismo, sin censura, debate, argumentos, y pruebas”. </p></div>
    <br/>
    <div><p style={{ textAlign: 'justify'}}>Cuando hablo de que el señor <a href="www.google.com" style={{fontWeight: 'bold'}}>Loret de Mola</a>Loret de Mola  <small>recibió</small> el año pasado <StrongText>35 millones</StrongText>, pues es porque tengo las pruebas, nada más que no me deja el Inai darlas a conocer y tengo más”, dijo. </p></div>
    <br/>
    <div>
      <ImgAmlo></ImgAmlo>
    </div>
    <br/>
  
    <div><p style={{ textAlign: 'justify'}}>Ayer, en un hecho sin precedente, el presidente <StrongText>López Obrador</StrongText> solicitó de manera formal al Inai que haga una investigación sobre los ingresos, bienes y origen de la riqueza del periodista Carlos Loret de Mola, socios y su familia.</p></div>
  </Paragraph>)],
}];
