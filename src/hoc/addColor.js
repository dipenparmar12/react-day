import React from 'react';

export default function addColor(WrapedComponent) {
  const colors = ['red', 'green', 'blue', 'yellow'];
  const randomColor = Math.floor(Math.random() * colors.length);

  return (props) => (
    <div className={colors[randomColor] + '-text'}>
      <WrapedComponent {...props} />
    </div>
  );
}
