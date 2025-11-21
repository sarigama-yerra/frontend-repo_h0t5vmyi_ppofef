import React from "react";
import RatingStars from "./RatingStars";

const CoffeeCard = ({ item, onClick, favorite, onFavoriteToggle }) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition">
      <button onClick={onClick} className="w-full text-left">
        <img src={item.image} alt={item.title} className="w-full h-40 object-cover" />
        <div className="p-4">
          <h3 className="font-semibold text-slate-800 text-base truncate">{item.title}</h3>
          <p className="text-sm text-slate-500 line-clamp-2 mt-1">{item.description}</p>
          <div className="mt-2"><RatingStars rating={item.rating} /></div>
          <div className="flex items-center justify-between mt-3">
            <span className="font-bold text-slate-900">${item.price.toFixed(2)}</span>
            <button
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); onFavoriteToggle?.(); }}
              className={`w-8 h-8 rounded-full flex items-center justify-center ${favorite ? "bg-amber-100 text-amber-600" : "bg-slate-100 text-slate-500"}`}
              aria-label="favorite"
            >
              {favorite ? "❤" : "♡"}
            </button>
          </div>
        </div>
      </button>
    </div>
  );
};

export default CoffeeCard;
