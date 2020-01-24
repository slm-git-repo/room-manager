import React from "react";
import Form from "react-bootstrap/Form";

import { roomOptions } from "../utils";

const objKeys = Object.keys(roomOptions);
const roomIds = objKeys.map(key => {
  return roomOptions[key].id;
});
const roomValues = objKeys.map(key => {
  return roomOptions[key].label;
});

function RoomSelector(props) {
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
