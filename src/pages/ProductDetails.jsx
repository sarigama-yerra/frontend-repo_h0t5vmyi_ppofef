import React, { useMemo, useState } from "react";
import { products } from "../data/products";
import QuantitySelector from "../components/QuantitySelector";
import PrimaryButton from "../components/PrimaryButton";

const sizes = ["S", "M", "L"];
const addons = ["Milk", "Ice", "Syrup"];

const ProductDetails = ({ id, onBack, onGoCart }) => {
  const product = useMemo(() => products.find((p) => p.id === String(id)), [id]);
  const [size, setSize] = useState("M");
  const [selected, setSelected] = useState([]);
  const [qty, setQty] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#F5E9D9] grid place-items-center p-8">
        <div className="text-[#3B2F2F]">Product not found</div>
      </div>
    );
  }

  const toggleAddon = (a) => {
    setSelected((prev) => (prev.includes(a) ? prev.filter((x) => x !== a) : [...prev, a]));
  };
  const finalPrice = (product.price + selected.length * 0.5) * qty;

  return (
    <div className="min-h-screen bg-[#F5E9D9]">
      <div className="max-w-3xl mx-auto px-6 pb-28">
        <div className="relative">
          <img src={product.image} className="w-full h-72 object-cover" />
          <button onClick={onBack} className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#F5E9D9] grid place-items-center">✕</button>
        </div>

        <div className="py-6">
          <h1 className="text-2xl font-bold text-[#3B2F2F]">{product.title}</h1>
          <p className="text-slate-600 mt-2">{product.description}</p>

          <div className="mt-6">
            <div className="font-semibold text-[#3B2F2F] mb-2">Size</div>
            <div className="flex flex-wrap gap-2">
              {sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`px-4 py-2 rounded-full border ${
                    size === s ? "bg-amber-700 text-white border-amber-700" : "bg-white text-slate-700 border-slate-200"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <div className="font-semibold text-[#3B2F2F] mb-2">Add-ons</div>
            <div className="flex flex-wrap gap-2">
              {addons.map((a) => {
                const active = selected.includes(a);
                return (
                  <button
                    key={a}
                    onClick={() => toggleAddon(a)}
                    className={`px-4 py-2 rounded-full border ${
                      active ? "bg-amber-700 text-white border-amber-700" : "bg-white text-slate-700 border-slate-200"
                    }`}
                  >
                    {a}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex items-center justify-between mt-8">
            <QuantitySelector value={qty} onChange={setQty} />
            <div className="text-2xl font-bold text-[#3B2F2F]">${finalPrice.toFixed(2)}</div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-[#F5E9D9]/90 backdrop-blur p-6">
        <div className="max-w-3xl mx-auto">
          <PrimaryButton label="Add to Cart" full onClick={onGoCart} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
