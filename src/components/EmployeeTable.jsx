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
    <div className="overflow-auto">
      <table className="w-full">
        <thead>
          <tr className="bg-slate-100">
            <th>Nome</th>
            <th>Cargo</th>
            <th>Salário</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((emp) => (
            <tr
              key={emp.id}
              className="border-b"
            >
              <td>{emp.nome}</td>

              <td>{emp.cargo}</td>

              <td>
                R$ {emp.salario}
              </td>

              <td>
                <button
                  onClick={() =>
                    onEdit(emp)
                  }
                >
                  <Pencil
                    size={18}
                  />
                </button>

                <button
                  onClick={() =>
                    onDelete(emp)
                  }
                >
                  <Trash2
                    size={18}
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}