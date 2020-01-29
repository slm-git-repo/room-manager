export const getReservations = () =>
  fetch("http://localhost:1337/reservations").then(response => response.json());

export const getRooms = () =>
  fetch("http://localhost:1337/rooms").then(response => response.json());

export const getUsers = () =>
  fetch("http://localhost:1337/users").then(response => response.json());
