import AppCard from "./AppCard";

export default function RecentEntries({
  entries,
  employees
}) {

  const latestEntries =
    [...entries]
      .sort(
        (a, b) =>
          new Date(b.data) -
          new Date(a.data)
      )
      .slice(0, 5);

  return (
    <AppCard>
      <h3
        className="
        text-lg
        font-bold
        mb-4
        "
      >
        Últimos Registros
      </h3>

      {latestEntries.length === 0 ? (
        <p>
          Nenhum registro encontrado.
        </p>
      ) : (
        <div className="space-y-3">
          {latestEntries.map(
            entry => {

              const employee =
                employees.find(
                  emp =>
                    emp.id ===
                    Number(
                      entry.empId
                    )
                );

              return (
                <div
                  key={entry.id}
                  className="
                  border-b
                  pb-2
                  "
                >
                  <strong>
                    {
                      employee?.nome
                    }
                  </strong>

                  <div
                    className="
                    text-sm
                    text-slate-500
                    "
                  >
                    {entry.data}
                  </div>
                </div>
              );
            }
          )}
        </div>
      )}
    </AppCard>
  );
}