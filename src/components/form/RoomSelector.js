import React from 'react';
import Form from 'react-bootstrap/Form';

import { getRooms } from '../utils';

function RoomSelector(props) {
  const rooms = getRooms(props.rooms);

  const handleOnChange = event => {
    props.onRoomChange(event.target.id);
  };

  return (
    <>
      <h5>Select a room:</h5>
      <div key='room-selector-radios' onChange={handleOnChange}>
        {rooms.map((val, index) => (
          <Form.Check
            key={index}
            type='radio'
            name='room-selector'
            id={val.id}
            label={val.label}
          />
        ))}
      </div>
    </>
  );
}

export default RoomSelector;
