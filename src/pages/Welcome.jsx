import React from "react";
import PrimaryButton from "../components/PrimaryButton";

const Welcome = ({ onGetStarted }) => {
  return (
    <div className="min-h-screen bg-[#221813] text-white flex flex-col items-center justify-between p-8">
      <div />
      <div className="flex flex-col items-center">
        <img src="/coffee-logo.png" alt="logo" className="w-40 h-40 rounded-2xl object-cover mb-6 bg-[#3B2F2F]" />
        <h1 className="text-3xl font-bold">Premium Coffee</h1>
        <p className="text-amber-100 mt-2 text-center">Brewed to Perfection, Served with Style</p>
      </div>
      <div className="w-full max-w-sm">
        <PrimaryButton label="Get Started" full onClick={onGetStarted} />
      </div>
    </div>
  );
};

export default Welcome;
