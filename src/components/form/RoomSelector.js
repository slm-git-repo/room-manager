import React from "react";
import Form from "react-bootstrap/Form";

// import { roomOptions } from "../utils";
import { getRooms } from "../utils";

function RoomSelector(props) {
  const rooms = getRooms(props.rooms);
  const objKeys = Object.keys(rooms);
  const roomIds = objKeys.map(key => rooms[key].id);
  const roomValues = objKeys.map(key => rooms[key].label);

  const handleOnChange = event => {
    props.onRoomChange(event.target.id);
  };

  return (
    <>
      <h5>Select a room:</h5>
      <div key="room-selector-radios" onChange={handleOnChange}>
        {roomIds.map((key, index) => (
          <Form.Check
            key={index}
            type="radio"
            name="room-selector"
            id={key}
            label={roomValues[index]}
          />
        ))}
      </div>
    </>
  );
}

export default RoomSelector;
