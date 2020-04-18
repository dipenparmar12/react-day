import React, { Component } from 'react';

function ShowWarning(params) {
  console.log(params);
  if (params.warnings) {
    return null;
  }
  return (
    <div>
      <h3>ErrorFound</h3>
      <p>
        Some Errors found in you input, Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Incidunt quidem quam exercitationem odio....
      </p>
    </div>
  );
}

export default class ConditionalRendering extends Component {
  render() {
    return (
      <div>
        <h1>Conditional_Rendering</h1>
        <p>Refresh Browser serval times</p>
        <ShowWarning warnings={Math.floor(Math.random() * 2)} />
      </div>
    );
  }
}
