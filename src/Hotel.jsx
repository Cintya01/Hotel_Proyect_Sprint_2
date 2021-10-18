import React from "react";
import "./styles.css";
import { OPCIONES_FORMATO_FECHA } from "./constantes";

function Hotel(props) {
  const manejarReserva = () => {
    alert("El Hotel ha sido reservado");
  };
  return (
    <div className="hotel general-cont">
      <img width="90%" src={props.imagen} alt={props.name} />
      <h3 className="hotel-title">{props.name}</h3>

      <span className="fecha-cont">
        {" "}
        Desde{" "}
        {new Date(props.fromDate).toLocaleDateString(
          "es-CL",
          OPCIONES_FORMATO_FECHA
        )}{" "}
      </span>
      <span className="fecha-cont">
        {" "}
        Hasta{" "}
        {new Date(props.toDate).toLocaleDateString(
          "es-CL",
          OPCIONES_FORMATO_FECHA
        )}{" "}
      </span>
      <div className="description-cont"> {props.description} </div>

      <div className="city-cont">
        <div className="svg-size2">
          <img src="./svg/mapa.svg" alt="mapa" />
        </div>
        {props.country} , {props.city}
      </div>
      <div className="rooms-price-cont">
        <div className="rooms-cont">
          <img className="svg-size2" src="./svg/room.svg" alt="rooms" />
          <p> Habitaciones: {props.rooms} </p>
        </div>
        <div className="price-cont">
          <p> {"$".repeat(props.price)} </p>
        </div>
      </div>
      <button className="btn-reserva" onClick={manejarReserva}>
        RESERVAR
      </button>
    </div>
  );
}

export default Hotel;
