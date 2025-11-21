import React, { useState } from "react";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Favorites from "./pages/Favorites";
import Profile from "./pages/Profile";

// Simple UI-only router logic for this demo (no backend)
export default function App() {
  const [route, setRoute] = useState("welcome");
  const [activeProductId, setActiveProductId] = useState(null);

  const goHome = () => setRoute("home");
  const openDetails = (id) => {
    setActiveProductId(id);
    setRoute("details");
  };

  if (route === "welcome") return <Welcome onGetStarted={goHome} />;
  if (route === "home")
    return (
      <div>
        <nav className="sticky top-0 z-10 bg-[#F5E9D9] border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-6 py-3 flex items-center gap-3">
            <button className="px-3 py-2 rounded-lg bg-white border border-slate-200" onClick={() => setRoute("home")}>Home</button>
            <button className="px-3 py-2 rounded-lg bg-white border border-slate-200" onClick={() => setRoute("favorites")}>Favorites</button>
            <button className="px-3 py-2 rounded-lg bg-white border border-slate-200" onClick={() => setRoute("cart")}>Cart</button>
            <button className="px-3 py-2 rounded-lg bg-white border border-slate-200" onClick={() => setRoute("profile")}>Profile</button>
          </div>
        </nav>
        <Home onOpenProduct={openDetails} />
      </div>
    );
  if (route === "details")
    return <ProductDetails id={activeProductId} onBack={() => setRoute("home")} onGoCart={() => setRoute("cart")} />;
  if (route === "cart")
    return (
      <div>
        <header className="bg-[#F5E9D9] border-b border-slate-200 px-6 py-3">
          <button className="px-3 py-2 rounded-lg bg-white border border-slate-200" onClick={() => setRoute("home")}>← Back</button>
        </header>
        <Cart />
      </div>
    );
  if (route === "favorites")
    return (
      <div>
        <header className="bg-[#F5E9D9] border-b border-slate-200 px-6 py-3">
          <button className="px-3 py-2 rounded-lg bg-white border border-slate-200" onClick={() => setRoute("home")}>← Back</button>
        </header>
        <Favorites onOpenProduct={openDetails} />
      </div>
    );
  if (route === "profile")
    return (
      <div>
        <header className="bg-[#F5E9D9] border-b border-slate-200 px-6 py-3">
          <button className="px-3 py-2 rounded-lg bg-white border border-slate-200" onClick={() => setRoute("home")}>← Back</button>
        </header>
        <Profile />
      </div>
    );
  return null;
}
