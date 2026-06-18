import {
  Pencil,
  Trash2,
} from "lucide-react";

export default function EmployeeTable({
  employees,
  onEdit,
  onDelete,
}) {
  return (
    <div className="overflow-x-auto">
  <table className="w-full">
    <thead>
      <tr className="bg-slate-100">
        <th className="px-4 py-3 text-left">
          Nome
        </th>

        <th className="px-4 py-3 text-left">
          Cargo
        </th>

        <th className="px-4 py-3 text-left">
          Salário
        </th>

        <th className="px-4 py-3 text-center w-32">
          Ações
        </th>
      </tr>
    </thead>

    <tbody>
      {employees.map((emp) => (
        <tr
          key={emp.id}
          className="
          border-b
          hover:bg-slate-50
          transition
          "
        >
          <td className="px-4 py-4">
            {emp.nome}
          </td>

          <td className="px-4 py-4">
            {emp.cargo}
          </td>

          <td className="px-4 py-4">
            {`R$ ${Number(
              emp.salario
            ).toLocaleString(
              'pt-BR'
            )}`}
          </td>

          <td
            className="
            px-4
            py-4
            "
          >
            <div
              className="
              flex
              justify-center
              items-center
              gap-3
              "
            >
              <button
                onClick={() =>
                  onEdit(emp)
                }
                className="
                text-indigo-600
                hover:text-indigo-800
                "
              >
                <Pencil
                  size={18}
                />
              </button>

              <button
                onClick={() =>
                  onDelete(emp)
                }
                className="
                text-red-600
                hover:text-red-800
                "
              >
                <Trash2
                  size={18}
                />
              </button>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
  );
}