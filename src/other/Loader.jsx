import React from "react";

const Loader = () => {
  return (
    <div
      className="
        min-h-screen flex items-center justify-center
        bg-gray-100 dark:bg-[#0f172a]
        transition-colors duration-300
      "
    >
      <div className="flex flex-col items-center gap-4">
        <div
          className="
            w-12 h-12
            border-4
            border-blue-600 dark:border-blue-500
            border-t-transparent
            rounded-full
            animate-spin
          "
        />
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          Loading data...
        </p>
      </div>
    </div>
  );
};

export default Loader;
