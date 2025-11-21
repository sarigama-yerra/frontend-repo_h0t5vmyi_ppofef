import React from "react";
import RatingStars from "./RatingStars";

const ProductCarousel = ({ items = [], onPressItem }) => {
  return (
    <div className="my-6">
      <div className="flex gap-4 overflow-x-auto pb-2 pl-2 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none]" style={{scrollbarWidth:'none'}}>
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => onPressItem?.(item.id)}
            className="min-w-[80%] sm:min-w-[360px] bg-white rounded-2xl border border-slate-200 overflow-hidden snap-start hover:shadow-md transition"
          >
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-slate-800 text-base">{item.title}</h3>
                <span className="font-bold text-slate-900">${item.price.toFixed(2)}</span>
              </div>
              <div className="mt-1"><RatingStars rating={item.rating} /></div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
