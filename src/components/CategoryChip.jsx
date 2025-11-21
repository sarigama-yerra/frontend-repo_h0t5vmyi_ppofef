import React from "react";

const CategoryChip = ({ label, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full border transition mr-2 ${
        active
          ? "bg-amber-700 text-white border-amber-700"
          : "bg-white text-slate-700 border-slate-200"
      }`}
    >
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
};

export default CategoryChip;
