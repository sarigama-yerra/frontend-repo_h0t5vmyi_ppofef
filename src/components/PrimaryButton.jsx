import React from "react";

const PrimaryButton = ({ label, onClick, full, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-xl bg-amber-700 hover:bg-amber-800 text-white px-5 py-3 shadow-md transition inline-flex items-center justify-center ${
        full ? "w-full" : ""
      } ${className}`}
    >
      <span className="font-semibold tracking-wide">{label}</span>
    </button>
  );
};

export default PrimaryButton;
