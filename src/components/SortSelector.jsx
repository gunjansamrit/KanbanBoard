import React from "react";

const SortSelector = ({ value, onChange }) => {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      <option value="priority">Priority</option>
      <option value="title">Title</option>
    </select>
  );
};

export default SortSelector;