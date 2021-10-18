import React from "react";
import "./styles.css";
import { OPCIONES_FORMATO_FECHA } from "./constantes";

console.clear();

function Header(props) {
  let getLugar = () => {
    if (
      props.filteredData.pais !== "todos" &&
      props.filteredData.pais !== null
    ) {
      return "En " + props.filteredData.pais;
    } else return "En cualquier lugar";
  };

  let getCosto = () => {
    if (
      props.filteredData.costo !== "todos" &&
      props.filteredData.costo !== null
    ) {
      return "De Precio " + "$".repeat(props.filteredData.costo);
    } else return "A cualquier precio";
  };

  let getTamano = () => {
    if (
      props.filteredData.tamano !== "todos" &&
      props.filteredData.tamano !== null
    ) {
      return "De Tamaño " + props.filteredData.tamano;
    } else return "De cualquier Tamaño";
  };

  let getFecha = () => {
    let fechaStr = "";
    const dateIni = new Date(props.filteredData.dateIni + "T00:00:00");

    if (
      props.filteredData.dateIni !== "todos" &&
      props.filteredData.dateIni !== null &&
      !isNaN(dateIni.valueOf())
    ) {
      fechaStr +=
        "Desde " + dateIni.toLocaleDateString("es-CL", OPCIONES_FORMATO_FECHA);
    }

    const dateFin = new Date(props.filteredData.dateFin + "T00:00:00");
    if (
      props.filteredData.dateFin !== "todos" &&
      props.filteredData.dateFin !== null &&
      !isNaN(dateFin.valueOf())
    ) {
      fechaStr +=
        " hasta " + dateFin.toLocaleDateString("es-CL", OPCIONES_FORMATO_FECHA);
    }
    if (fechaStr.length < 1) fechaStr = "En cualquier fecha";
    return fechaStr;
  };

  return (
    <div className="header-cont general-cont">
      <div className="text-header-cont">
        <h1>Hoteles</h1>
        <h3> {getFecha()}</h3>
        <h3> {getLugar()} </h3>
        <h3> {getTamano()}</h3>
        <h3> {getCosto()} </h3>
      </div>
    </div>
  );
}

export default Header;
