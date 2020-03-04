import React from 'react';
import Alert from 'react-bootstrap/Alert';

import ResultsTable from './results/ResultsTable';

function Confirmed(props) {
  const xhr = new XMLHttpRequest();
  const postUrl = `http://localhost:5000/api/reservas/${props.data.name}/sala/${props.data.room}`;
  xhr.open('POST', postUrl, true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
  xhr.setRequestHeader(
    'Access-Control-Allow-Methods',
    'PUT, GET, POST, DELETE, OPTIONS'
  );
  xhr.setRequestHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  xhr.send(
    JSON.stringify({
      data: props.data.date,
      horaEntrada: props.data.startTime,
      horaSaida: props.data.endTime
    })
  );

  return (
    <>
      <div className='jumbotron'>
        <h1>Room Manager</h1>
      </div>
      <Alert variant='success'>
        The room was successfully reserved! See details below.
      </Alert>
      <div className='user-results'>
        <ResultsTable
          data={props.data}
          rooms={props.rooms}
          users={props.users}
        />
      </div>
    </>
  );
}

export default Confirmed;
