import React, { useState } from "react";
import { products } from "../data/products";
import CoffeeCard from "../components/CoffeeCard";

const Favorites = ({ onOpenProduct }) => {
  const [favorites, setFavorites] = useState(["2", "4"]);
  const toggle = (id) => setFavorites((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  const favItems = products.filter((p) => favorites.includes(p.id));

  return (
    <div className="min-h-screen bg-[#F5E9D9] p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-[#3B2F2F] mb-4">Favorites</h1>
        {favItems.length === 0 ? (
          <div className="text-slate-600">No favorites yet. Explore and add some!</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {favItems.map((item) => (
              <CoffeeCard key={item.id} item={item} favorite onFavoriteToggle={() => toggle(item.id)} onClick={() => onOpenProduct(item.id)} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
