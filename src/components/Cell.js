import React from 'react';

const Cell = ({ value, readOnly, onChange }) => {
  const handleChange = (e) => {
    const newValue = parseInt(e.target.value, 10) || 0;
    onChange(newValue);
  };

  return (
    <input
      type="number"
      min="1"
      max="9"
      value={value === 0 ? '' : value}
      readOnly={readOnly}
      onChange={handleChange}
      className="sudoku-cell"
    />
  );
};

export default Cell;
