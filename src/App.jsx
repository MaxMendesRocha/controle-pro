import { useState } from "react";

import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import Timesheet from "./pages/Timesheet";
import Holidays from "./pages/Holidays";
import Payroll from "./pages/Payroll";
import Reports from "./pages/Reports";

export default function App() {
  const [page, setPage] = useState("dashboard");

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
    <div className="min-h-screen bg-slate-100">
      <header className="bg-indigo-600 text-white p-4">
        <h1 className="text-2xl font-bold">
          Controle Pro
        </h1>
      </header>

      <nav className="bg-white shadow p-4 flex gap-2 flex-wrap">
        <button className="px-4 py-2 rounded-lg hover:bg-slate-100 transition" onClick={() => setPage("dashboard")}>
          Dashboard
        </button>

        <button className="px-4 py-2 rounded-lg hover:bg-slate-100 transition" onClick={() => setPage("employees")}>
          Funcionários
        </button>

        <button className="px-4 py-2 rounded-lg hover:bg-slate-100 transition" onClick={() => setPage("timesheet")}>
          Ponto
        </button>

        <button className="px-4 py-2 rounded-lg hover:bg-slate-100 transition" onClick={() => setPage("holidays")}>
          Feriados
        </button>

        <button className="px-4 py-2 rounded-lg hover:bg-slate-100 transition" onClick={() => setPage("payroll")}>
          Folha
        </button>

        <button className="px-4 py-2 rounded-lg hover:bg-slate-100 transition" onClick={() => setPage("reports")}>
          Relatórios
        </button>
      </nav>

      <main className="p-6">
        {renderPage()}
      </main>
    </div>
  );
}