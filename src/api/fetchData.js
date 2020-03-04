export const getReservations = () =>
  fetch('http://localhost:5000/api/reservas/').then(response =>
    response.json()
  );

export const getRooms = () =>
  fetch('http://localhost:5000/api/salas/').then(response => response.json());

export const getUsers = () =>
  fetch('http://localhost:5000/api/usuarios/').then(response =>
    response.json()
  );
