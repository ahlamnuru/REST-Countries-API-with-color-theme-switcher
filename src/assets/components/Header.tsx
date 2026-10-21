import { Link } from "@tanstack/react-router";
import { useTheme } from "../hooks/useTheme";
import { MoonIcon } from "./Icons";

function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-white shadow-sm dark:bg-blue-900">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 md:px-10">
        <Link
          to="/"
          className="text-sm font-extrabold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-400 md:text-2xl"
        >
          Where in the world?
        </Link>

        <button
          type="button"
          onClick={toggleTheme}
          className="flex items-center gap-2 text-xs font-semibold hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-400 md:text-base"
        >
          <MoonIcon className="h-4 w-4 md:h-5 md:w-5" />
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </header>
  );
}

export default Header;
