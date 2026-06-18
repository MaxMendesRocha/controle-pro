import StatCard from "./StatCard";

import {
  formatHours
} from "../utils/hourUtils";

export default function TimesheetSummary({
  entries
}) {

  const totalHoras =
    entries.reduce(
      (acc, e) =>
        acc +
        (e.totalHoras || 0),
      0
    );

  const total50 =
    entries.reduce(
      (acc, e) =>
        acc +
        (e.extra50 || 0),
      0
    );

  const total100 =
    entries.reduce(
      (acc, e) =>
        acc +
        (e.extra100 || 0),
      0
    );

  return (
    <div
      className="
      grid
      grid-cols-1
      md:grid-cols-4
      gap-4
      "
    >
      <StatCard
        title="Registros"
        value={entries.length}
      />

      <StatCard
        title="Horas"
        value={formatHours(
          totalHoras
        )}
      />

      <StatCard
        title="Extra 50%"
        value={formatHours(
          total50
        )}
      />

      <StatCard
        title="Extra 100%"
        value={formatHours(
          total100
        )}
      />
    </div>
  );
}