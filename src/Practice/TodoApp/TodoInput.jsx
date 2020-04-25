import React from 'react';
export default function TodoInput(props) {
  return (
    <React.Fragment>
      <input
        type="text"
        name="newItemText"
        id="newItemText"
        onChange={(e) => props.handleFormInput(e)}
        onKeyDown={(e) => props.keyPress(e)}
      />
    </React.Fragment>
  );
}
