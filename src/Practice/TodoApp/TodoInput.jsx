import React from 'react';
export default function TodoInput(props) {
  return (
    <React.Fragment>
      <input
        type="text"
        name="newItemText"
        id="newItemText"
        onKeyDown={(e) => props.handleEnterPress(e)}
      />
    </React.Fragment>
  );
}
