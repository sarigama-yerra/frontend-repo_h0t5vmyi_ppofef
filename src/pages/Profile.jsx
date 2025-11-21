import React from "react";

const options = [
  { icon: "📦", label: "Orders" },
  { icon: "💳", label: "Payments" },
  { icon: "⚙️", label: "Settings" },
  { icon: "❓", label: "Support" },
];

const Profile = () => {
  return (
    <div className="min-h-screen bg-[#F5E9D9] p-6">
      <div className="max-w-xl mx-auto">
        <div className="flex flex-col items-center mt-6 mb-8">
          <img
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
            className="w-20 h-20 rounded-full mb-3"
          />
          <div className="text-xl font-bold text-[#3B2F2F]">Alex Johnson</div>
          <div className="text-slate-600">alex.johnson@example.com</div>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
          {options.map((o, i) => (
            <button
              key={o.label}
              className={`w-full flex items-center gap-3 px-6 py-4 text-left ${
                i !== options.length - 1 ? "border-b border-slate-200" : ""
              }`}
            >
              <span className="text-[#3B2F2F]">{o.icon}</span>
              <span className="font-medium text-[#3B2F2F] flex-1">{o.label}</span>
              <span className="text-slate-400">›</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
