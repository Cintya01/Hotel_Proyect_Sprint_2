import React from "react";
import "./styles.css";
import Hotel from "./Hotel";

function Hotels(props) {
  if (props.listaHoteles.length === 0) {
    return <div className="hotels-cont">No Hay hoteles disponibles</div>;
  } else {
    return (
      <div className="hotels-cont">
        {props.listaHoteles.map((hotel) => {
          return (
            <Hotel
              key={hotel.name}
              imagen={hotel.photo}
              name={hotel.name}
              country={hotel.country}
              fromDate={hotel.availabilityFrom}
              toDate={hotel.availabilityTo}
              description={hotel.description}
              city={hotel.city}
              price={hotel.price}
              rooms={hotel.rooms}
            />
          );
        })}
      </div>
    );
  }
}
export default Hotels;
