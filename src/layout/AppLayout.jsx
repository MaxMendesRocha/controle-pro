import { useState } from "react";

import Sidebar from "./Sidebar";
import Header from "./Header";

export default function AppLayout({
  children,
  page,
  setPage,
  darkMode,
  toggleDarkMode
}) {
  const [
    sidebarOpen,
    setSidebarOpen
  ] = useState(false);

  return (
    <div className="flex">
      <Sidebar
        page={page}
        setPage={setPage}
        isOpen={sidebarOpen}
        onClose={() =>
          setSidebarOpen(false)
        }
      />

      <div
        className="
        flex-1
        min-h-screen

        bg-slate-100
        dark:bg-slate-950

        dark:text-white
        "
      >
        <Header
          darkMode={darkMode}
          toggleDarkMode={
            toggleDarkMode
          }
          toggleSidebar={() =>
            setSidebarOpen(true)
          }
        />

        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}