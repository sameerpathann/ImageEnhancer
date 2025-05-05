import React from "react";
import Home from "./Components/Home";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 bg-gray-200">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Turn Blurry Into Brilliant.
        </h1>
        <p className="text-gray-800 font-semibold text-lg">
          Blurry photos? Not anymore. Elevate your images with clarity and
          precision using our AI-driven enhancement engine.
        </p>
      </div>
      <Home />
      <div className="text-lg text-gray-500 mt-6">
        <span>From pixels to perfection.</span>
      </div>
    </div>
  );
};

export default App;
