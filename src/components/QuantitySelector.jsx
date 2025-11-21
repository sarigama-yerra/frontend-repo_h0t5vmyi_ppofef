import React from "react";

const QuantitySelector = ({ value, onChange }) => {
  const dec = () => onChange(Math.max(1, value - 1));
  const inc = () => onChange(value + 1);
  return (
    <div className="flex items-center">
      <button onClick={dec} className="w-8 h-8 rounded-md bg-amber-100 text-amber-800">-</button>
      <span className="mx-3 font-semibold text-slate-800">{value}</span>
      <button onClick={inc} className="w-8 h-8 rounded-md bg-amber-100 text-amber-800">+</button>
    </div>
  );
};

export default QuantitySelector;
