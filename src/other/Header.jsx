import React from "react";
import Navbar from "../components/Navbar/Navbar";

const Header = ({ changeUser, data }) => {
  const name = data?.firstName || "Admin";

  const logOut = () => {
    localStorage.removeItem("loggedInUser");
    changeUser(null);
  };

  return (
    <header className="flex items-center justify-between mb-2 -mt-6">
      {/* Left side */}
      <div>
        <p className="text-sm tracking-wide text-gray-600 dark:text-gray-400">
          Welcome back
        </p>
        <h1 className="text-3xl font-semibold mt-1 text-gray-900 dark:text-white">
          {name}
          <span className="ml-2">👋</span>
        </h1>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        <Navbar />

        <button
          onClick={logOut}
          className="
            flex items-center gap-2
            bg-red-600 hover:bg-red-700
            text-white text-sm font-medium
            px-5 py-2 rounded-lg
            shadow-md hover:shadow-lg
            transition-all duration-200
            active:scale-95
          "
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
