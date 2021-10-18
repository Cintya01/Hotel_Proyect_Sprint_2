import React, { useState } from "react";
import "./styles.css";

console.clear();

function Filters({ onFilterChange }) {
  const [dateIni, setDateIni] = useState("");
  const [dateFin, setDateFin] = useState("");
  const [pais, setPais] = useState("todos");
  const [tamano, setTamano] = useState("todos");
  const [costo, setCosto] = useState("todos");

  const getFilterObject = () => {
    return {
      dateIni,
      dateFin,
      pais,
      tamano,
      costo
    };
  };

  const manejarCambioPais = (e) => {
    let filterObject = getFilterObject();
    setPais(e.target.value);
    filterObject.pais = e.target.value;
    onFilterChange(filterObject);
  };

  const manejarCambioTamano = (e) => {
    let filterObject = getFilterObject();
    setTamano(e.target.value);
    filterObject.tamano = e.target.value;
    onFilterChange(filterObject);
  };

  const manejarCambioCosto = (e) => {
    let filterObject = getFilterObject();
    setCosto(e.target.value);
    filterObject.costo = e.target.value;
    onFilterChange(filterObject);
  };

  const manejarCambioFechaIni = (e) => {
    let filterObject = getFilterObject();
    setDateIni(e.target.value);
    filterObject.dateIni = e.target.value;
    onFilterChange(filterObject);
  };

  const manejarCambioFechaFin = (e) => {
    let filterObject = getFilterObject();
    setDateFin(e.target.value);
    filterObject.dateFin = e.target.value;
    onFilterChange(filterObject);
  };
  const manejarClick = (e) => {
    let filterObject = getFilterObject();
    setDateIni("");
    setDateFin("");
    setCosto("todos");
    setTamano("todos");
    setPais("todos");
    filterObject.costo = null;
    filterObject.dateFin = null;
    filterObject.dateIni = "todos";
    filterObject.pais = "todos";
    filterObject.tamano = "todos";
    onFilterChange(filterObject);
  };

  return (
    <div className="filter-cont">
      <input value={dateIni} type="date" onChange={manejarCambioFechaIni} />
      <input value={dateFin} type="date" onChange={manejarCambioFechaFin} />
      {/* País */}
      <select value={pais} onChange={manejarCambioPais}>
        <option value="todos">Todos los países</option>
        <option value="Argentina">Argentina</option>
        <option value="Brasil">Brasil</option>
        <option value="Uruguay">Uruguay</option>
        <option value="Chile">Chile</option>
      </select>
      {/* Tamaño */}
      <select value={tamano} onChange={manejarCambioTamano}>
        <option value="todos">Todos los tamaños</option>
        <option value="pequeno">Pequeño</option>
        <option value="mediano">Mediano</option>
        <option value="grande">Grande</option>
      </select>
      {/* Costo */}
      <select value={costo} onChange={manejarCambioCosto}>
        <option value="todos">Todos los precios</option>
        <option value="1">Oferta</option>
        <option value="2">Económico</option>
        <option value="3">Moderado</option>
        <option value="4">Lujoso</option>
      </select>
      <button className="btn" onClick={manejarClick}>
        <img className="svg-size" src="./svg/delete.svg" alt="trash-can" />
        LIMPIAR
      </button>
    </div>
  );
}

export default Filters;
