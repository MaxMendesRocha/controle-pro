export default function TimesheetFilters({
  employees,
  selectedEmployee,
  setSelectedEmployee,
  selectedMonth,
  setSelectedMonth
}) {
  return (
    <div
      className="
      bg-white
      dark:bg-slate-900

      rounded-xl
      shadow-sm

      p-4

      grid
      md:grid-cols-2
      gap-4
      "
    >
      <select
        value={selectedEmployee}
        onChange={(e) =>
          setSelectedEmployee(
            e.target.value
          )
        }
        className="
        border
        rounded-lg
        p-2
        "
      >
        <option value="">
          Todos os funcionários
        </option>

        {employees.map(emp => (
          <option
            key={emp.id}
            value={emp.id}
          >
            {emp.nome}
          </option>
        ))}
      </select>

      <input
        type="month"
        value={selectedMonth}
        onChange={(e) =>
          setSelectedMonth(
            e.target.value
          )
        }
        className="
        border
        rounded-lg
        p-2
        "
      />
    </div>
  );
}