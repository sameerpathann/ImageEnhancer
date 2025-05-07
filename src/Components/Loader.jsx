import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="w-14 h-14 border-4 border-red-400 rounded-full border-t-transparent animate-spin"></div>
    </div>
  );
};

export default Loader;
