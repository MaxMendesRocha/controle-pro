import { formatHours }
from "../utils/hourUtils";

export default function TimesheetTable({
  entries,
  employees,
}) {

  return (
    <table
      className="
      w-full
      "
    >

      <thead>
        <tr>
          <th>Data</th>
          <th>Funcionário</th>
          <th>Total</th>
          <th>Extra</th>
        </tr>
      </thead>

      <tbody>

        {entries.map(
          entry => {

          const emp =
            employees.find(
              e =>
              e.id ===
              Number(
                entry.empId
              )
            );

          return (
            <tr
              key={entry.id}
            >
              <td>
                {entry.data}
              </td>

              <td>
                {emp?.nome}
              </td>

              <td>
                {
                  formatHours(
                    entry.totalHoras
                  )
                }
              </td>

              <td>
                {entry.extra50 >
                0
                ? `50% (${formatHours(entry.extra50)})`
                : entry.extra100 >
                  0
                ? `100% (${formatHours(entry.extra100)})`
                : "-"
                }
              </td>
            </tr>
          );
        })}

      </tbody>
    </table>
  );
}