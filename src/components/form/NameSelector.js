import React from 'react';
import Select from 'react-select';

import { getNames } from '../utils';

function NameSelector(props) {
  const handleOnClick = event => {
    props.onNameClick(event.value);
  };

  return (
    <>
      <h5>Select your name:</h5>
      <Select options={getNames(props.users)} onChange={handleOnClick} />
    </>
  );
}

export default NameSelector;
