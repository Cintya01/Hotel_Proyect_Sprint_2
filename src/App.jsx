import "./styles.css";
import React, { useState } from "react";
import Header from "./Header";
import Filters from "./Filters";
import Hotels from "./hotels";
import { hotelsData } from "./Hoteldata";

export default function App() {
  const [listaHotel, setListaHotel] = useState(hotelsData);
  const [filter, setFilter] = useState({
    dateIni: null,
    dateFin: null,
    pais: null,
    tamano: null,
    costo: null
  });

  const filterList = (filtros) => {
    let filteredList = hotelsData;
    filteredList = filterByDate(filteredList, filtros.dateIni, filtros.dateFin);
    filteredList = filterByCountry(filteredList, filtros.pais);
    filteredList = filterBySize(filteredList, filtros.tamano);
    filteredList = filterByPrice(filteredList, filtros.costo);
    setListaHotel(filteredList);
  };

  const filterByCountry = (hotelList, pais) => {
    if (pais !== "todos" && pais !== null) {
      hotelList = hotelList.filter((hotel) => {
        return hotel.country === pais;
      });
    }
    return hotelList;
  };

  const filterBySize = (hotelList, tamano) => {
    if (tamano !== "todos" && tamano !== null) {
      hotelList = hotelList.filter((hotel) => {
        if (tamano === "pequeno") {
          return hotel.rooms <= 10;
        } else if (tamano === "grande") {
          return hotel.rooms >= 20;
        } else if (tamano === "mediano") {
          return hotel.rooms < 20 && hotel.rooms > 10;
        } else {
          return false;
        }
      });
    }
    return hotelList;
  };

  const filterByPrice = (hotelList, costo) => {
    if (costo !== "todos" && costo !== null) {
      hotelList = hotelList.filter((hotel) => {
        return hotel.price === Number(costo);
      });
    }
    return hotelList;
  };

  const filterByDate = (hotelList, dateIni, dateFin) => {
    if (dateIni !== null && dateFin !== null) {
      hotelList = hotelList.filter((hotel) => {
        return (
          new Date(hotel.availabilityFrom) >= new Date(dateIni) &&
          new Date(hotel.availabilityTo) <= new Date(dateFin)
        );
      });
    }
    return hotelList;
  };

  return (
    <div className="App">
      <Header filteredData={filter} />
      <Filters
        onFilterChange={(e) => {
          setFilter(e);
          filterList(e);
        }}
      />
      <Hotels listaHoteles={listaHotel} />
    </div>
  );
}
