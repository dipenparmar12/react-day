import React from 'react';

export default function TodoItem(props) {
  return (
    <div className="todo-item">
      <label htmlFor={props.id}>
        <input
          type="checkbox"
          id={props.id}
          checked={props.item.completed}
          onChange={() => props.markItem(props.item)}
        />
        {props.item.text}
      </label>
      <p> </p>
    </div>
  );
}
