export const weekday = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo"
];

export const month = [
  "Enero",
  "Febrero",
  "marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre"
];

export const completeDateString = (d) => {
  const dateValue = new Date(d);
  const day = weekday[dateValue.getDay()];
  const days = dateValue.getDate();
  const ymonth = month[dateValue.getMonth()];
  const year = dateValue.getFullYear();

  return `${day} ${days} de ${ymonth} de ${year}`;
};
