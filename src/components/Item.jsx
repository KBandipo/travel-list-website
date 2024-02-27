import React from "react";

export default function Item({ item, onDeleteItems, onToggleItem }) {
  const { quantity, description, packed, id } = item;
  return (
    <li>
      <input
        type="checkbox"
        value={packed}
        onChange={() => {
          onToggleItem(id);
        }}
      />
      <span style={packed ? { textDecoration: "line-through" } : {}}>
        {quantity} {description}
      </span>
      <button onClick={() => onDeleteItems(id)}> &times;</button>
    </li>
  );
}
