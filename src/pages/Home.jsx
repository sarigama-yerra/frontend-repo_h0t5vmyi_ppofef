import React, { useMemo, useState } from "react";
import HeaderBar from "../components/HeaderBar";
import CategoryChip from "../components/CategoryChip";
import ProductCarousel from "../components/ProductCarousel";
import CoffeeCard from "../components/CoffeeCard";
import { products } from "../data/products";

const categories = ["Hot Coffee", "Cold Coffee", "Beans", "Pastries"];

const Home = ({ onOpenProduct }) => {
  const [active, setActive] = useState("Hot Coffee");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return products.filter(
      (p) =>
        p.category === active &&
        (p.title.toLowerCase().includes(query.toLowerCase()) ||
          p.description.toLowerCase().includes(query.toLowerCase()))
    );
  }, [active, query]);

  const featured = useMemo(() => products.filter((p) => p.popular), []);

  return (
    <div className="min-h-screen bg-[#F5E9D9]">
      <div className="max-w-6xl mx-auto px-6 pt-8 pb-24">
        <HeaderBar onSearch={setQuery} />

        <h2 className="text-lg font-semibold text-[#3B2F2F]">Categories</h2>
        <div className="flex items-center overflow-x-auto py-3">
          {categories.map((c) => (
            <CategoryChip key={c} label={c} active={c === active} onClick={() => setActive(c)} />
          ))}
        </div>

        <h2 className="text-lg font-semibold text-[#3B2F2F] mt-4">Featured</h2>
        <ProductCarousel items={featured} onPressItem={onOpenProduct} />

        <h2 className="text-lg font-semibold text-[#3B2F2F] mt-4">Popular</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
          {filtered.map((item) => (
            <CoffeeCard key={item.id} item={item} onClick={() => onOpenProduct(item.id)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
