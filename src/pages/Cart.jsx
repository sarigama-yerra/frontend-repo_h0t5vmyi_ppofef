import React, { useState } from "react";
import QuantitySelector from "../components/QuantitySelector";
import PrimaryButton from "../components/PrimaryButton";

const initialItems = [
  {
    id: "1",
    title: "Espresso",
    image:
      "https://images.unsplash.com/photo-1512568400610-62da28bc8a13?q=80&w=1200&auto=format&fit=crop",
    price: 3.5,
    qty: 1,
    size: "M",
  },
  {
    id: "2",
    title: "Iced Latte",
    image:
      "https://images.unsplash.com/photo-1494415859740-21e878dd929d?q=80&w=1200&auto=format&fit=crop",
    price: 4.5,
    qty: 2,
    size: "L",
  },
];

const Cart = () => {
  const [items, setItems] = useState(initialItems);

  const updateQty = (id, qty) => setItems((prev) => prev.map((i) => (i.id === id ? { ...i, qty } : i)));
  const removeItem = (id) => setItems((prev) => prev.filter((i) => i.id !== id));

  const subtotal = items.reduce((acc, i) => acc + i.price * i.qty, 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  return (
    <div className="min-h-screen bg-[#F5E9D9] p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold text-[#3B2F2F] mb-4">Your Cart</h1>

        <div className="space-y-3 mb-6">
          {items.map((item) => (
            <div key={item.id} className="flex gap-4 bg-white border border-slate-200 rounded-2xl p-3">
              <img src={item.image} className="w-20 h-20 object-cover rounded-xl" />
              <div className="flex-1">
                <div className="font-semibold text-[#3B2F2F]">{item.title}</div>
                <div className="text-sm text-slate-500 my-1">Size: {item.size}</div>
                <QuantitySelector value={item.qty} onChange={(n) => updateQty(item.id, n)} />
              </div>
              <div className="text-right">
                <div className="font-bold text-[#3B2F2F] mb-2">${(item.price * item.qty).toFixed(2)}</div>
                <button className="text-amber-700 underline" onClick={() => removeItem(item.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-2">
          <div className="flex justify-between">
            <span className="text-slate-600">Subtotal</span>
            <span className="text-slate-800 font-medium">${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-600">Tax</span>
            <span className="text-slate-800 font-medium">${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between pt-2">
            <span className="text-[#3B2F2F] font-bold">Total</span>
            <span className="text-[#3B2F2F] font-bold">${total.toFixed(2)}</span>
          </div>
          <PrimaryButton label="Checkout" full onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
