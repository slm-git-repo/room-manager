import React from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

function NameSelector(props) {
  const handleOnClick = event => {
    props.onNameClick(event.target.id);
  };

  return (
    <DropdownButton
      title="Select name"
      className="user-form__name"
      onClick={handleOnClick}
    >
      <Dropdown.Item id="1">Bárbara Ribeiro</Dropdown.Item>
      <Dropdown.Item id="2">Catarina Curioso</Dropdown.Item>
      <Dropdown.Item id="3">Sérgio Machado</Dropdown.Item>
    </DropdownButton>
  );
}

export default NameSelector;
