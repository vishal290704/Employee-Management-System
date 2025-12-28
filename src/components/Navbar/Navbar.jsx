import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className="w-full flex items-center px-6
                 justify-center
                  dark:border-gray-700"
    >
      {/* Right side container */}
      <div className="ml-auto flex items-center">
        <button
          onClick={toggleTheme}
          className="px-5 py-2 rounded-lg text-sm
                     bg-gray-200 dark:bg-gray-700
                     text-gray-800 dark:text-white
                     hover:scale-105 transition"
        >
          {theme === "dark" ? "☀ Light" : "🌙 Dark"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
