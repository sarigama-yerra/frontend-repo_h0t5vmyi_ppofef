import React from "react";

const HeaderBar = ({ onSearch }) => {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-4 mb-4">
        <img
          src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
          alt="avatar"
          className="w-10 h-10 rounded-full"
        />
        <div className="flex-1">
          <div className="text-sm text-slate-500">Good Morning</div>
          <div className="font-semibold text-slate-800">Premium Coffee</div>
        </div>
        <button className="w-9 h-9 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center">🔔</button>
      </div>
      <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-xl px-3 py-2">
        <span className="text-slate-400">🔎</span>
        <input
          placeholder="Search coffee, beans, pastries"
          onChange={(e) => onSearch?.(e.target.value)}
          className="flex-1 outline-none text-sm text-slate-800 placeholder:text-slate-400"
        />
      </div>
    </div>
  );
};

export default HeaderBar;
