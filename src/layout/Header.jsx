import {
  Menu,
  Moon,
  Sun
} from "lucide-react";

export default function Header({
  darkMode,
  toggleDarkMode,
  toggleSidebar
}) {
  return (
    <header
      className="
      h-16
      bg-white
      dark:bg-slate-900
      dark:text-white
      border-b
      dark:border-slate-700
      flex
      items-center
      justify-between
      px-4
      "
    >
      <div
        className="
        flex
        items-center
        gap-3
        "
      >
        <button
          className="
          md:hidden
          "
          onClick={toggleSidebar}
        >
          <Menu />
        </button>

        <h2
          className="
          text-lg
          font-semibold
          "
        >
          Sistema de Controle
        </h2>
      </div>

      <button
        onClick={toggleDarkMode}
      >
        {darkMode
          ? <Sun />
          : <Moon />
        }
      </button>
    </header>
  );
}