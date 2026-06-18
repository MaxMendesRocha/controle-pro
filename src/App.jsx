import { useState } from "react";

import AppLayout from "./layout/AppLayout";

import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import Timesheet from "./pages/Timesheet";
import Holidays from "./pages/Holidays";
import Payroll from "./pages/Payroll";
import Reports from "./pages/Reports";

import useTheme from "./hooks/useTheme";

export default function App() {
  const [page, setPage] = useState("dashboard");

  const {
    isDark,
    toggleTheme
  } = useTheme();

  const renderPage = () => {
    switch (page) {
      case "employees":
        return <Employees />;

      case "timesheet":
        return <Timesheet />;

      case "holidays":
        return <Holidays />;

      case "payroll":
        return <Payroll />;

      case "reports":
        return <Reports />;

      default:
        return <Dashboard />;
    }
  };

  return (
    <AppLayout
      page={page}
      setPage={setPage}
      darkMode={isDark}
      toggleDarkMode={toggleTheme}
    >
      {renderPage()}
    </AppLayout>
  );
}