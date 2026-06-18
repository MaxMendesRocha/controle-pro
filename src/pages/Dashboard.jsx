import PageTitle from "../components/PageTitle";
import StatCard from "../components/StatCard";
import RecentEntries from "../components/RecentEntries";
import CompetencySelector from "../components/CompetencySelector";

import useEmployees from "../hooks/useEmployees";
import useEntries from "../hooks/useEntries";
import useCompetency from "../hooks/useCompetency";

import {
  formatHours
} from "../utils/hourUtils";

import {
  calculateDashboardData
} from "../utils/dashboardUtils";

import {
  formatCurrency
} from "../utils/currencyUtils";

import {
  filterByCompetency
} from "../utils/competencyUtils";

export default function Dashboard() {

  const { employees } =
    useEmployees();

  const { entries } =
    useEntries();

  const {
    competency
  } = useCompetency();

  const filteredEntries =
    filterByCompetency(
      entries,
      competency
    );

  const dashboard =
    calculateDashboardData(
      employees,
      filteredEntries
    );

  return (
    <div className="space-y-6">

      <PageTitle
        title="Dashboard"
        subtitle="Visão geral do sistema"
      />

      <CompetencySelector />

      <div
        className="
        grid

        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-5

        gap-4
        "
      >

        <StatCard
          title="Funcionários"
          value={
            dashboard.totalEmployees
          }
        />

        <StatCard
          title="Horas"
          value={formatHours(
            dashboard.totalHours
          )}
        />

        <StatCard
          title="Extra 50%"
          value={formatHours(
            dashboard.totalExtra50
          )}
        />

        <StatCard
          title="Extra 100%"
          value={formatHours(
            dashboard.totalExtra100
          )}
        />

        <StatCard
          title="Folha Prevista"
          value={formatCurrency(
            dashboard.payrollProjection
          )}
        />

      </div>

      <RecentEntries
        entries={
          filteredEntries
        }
        employees={
          employees
        }
      />

    </div>
  );
}