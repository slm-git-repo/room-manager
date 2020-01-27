export const getReservations = () =>
  fetch("http://localhost:1337/json").then(response => response.json());
