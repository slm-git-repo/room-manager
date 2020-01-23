import React from "react";
import Form from "react-bootstrap/Form";

function RoomSelector(props) {
  const handleOnChange = event => {
    props.onRoomChange(event.target.id);
  };

  return (
    <>
      <h5>Select a room:</h5>
      <div key="room-selector-radios" onChange={handleOnChange}>
        <Form.Check type="radio" name="room-selector" id="1" label="Shark" />
        <Form.Check type="radio" name="room-selector" id="2" label="Puffer" />
        <Form.Check type="radio" name="room-selector" id="3" label="Carp" />
        <Form.Check type="radio" name="room-selector" id="4" label="Bream" />
      </div>
    </>
  );
}

export default RoomSelector;
