import {
  Pencil,
  Trash2,
  Wallet,
  Clock3,
  Briefcase
} from "lucide-react";

import AppCard from "./AppCard";

export default function EmployeeCard({
  employee,
  onEdit,
  onDelete
}) {
  return (
    <AppCard>
      <div
        className="
        flex
        justify-between
        items-start
        "
      >
        <div>
          <h3
            className="
            text-lg
            font-bold
            "
          >
            {employee.nome}
          </h3>

          <p
            className="
            text-slate-500
            dark:text-slate-400
            "
          >
            CPF: {employee.cpf}
          </p>
        </div>
      </div>

      <div
        className="
        mt-4
        space-y-3
        "
      >
        <div
          className="
          flex
          items-center
          gap-2
          "
        >
          <Briefcase size={18} />

          <span>
            {employee.cargo}
          </span>
        </div>

        <div
          className="
          flex
          items-center
          gap-2
          "
        >
          <Wallet size={18} />

          <span>
            R$ {Number(
              employee.salario
            ).toLocaleString(
              "pt-BR"
            )}
          </span>
        </div>

        <div
          className="
          flex
          items-center
          gap-2
          "
        >
          <Clock3 size={18} />

          <span>
            {employee.horasDiarias}h/dia
          </span>
        </div>
      </div>

      <div
        className="
        flex
        gap-2
        mt-6
        "
      >
        <button
          onClick={() =>
            onEdit(employee)
          }
          className="
          flex
          items-center
          gap-2

          bg-indigo-600
          hover:bg-indigo-700

          text-white

          px-3
          py-2

          rounded-lg
          "
        >
          <Pencil size={16} />

          Editar
        </button>

        <button
          onClick={() =>
            onDelete(employee)
          }
          className="
          flex
          items-center
          gap-2

          bg-red-600
          hover:bg-red-700

          text-white

          px-3
          py-2

          rounded-lg
          "
        >
          <Trash2 size={16} />

          Excluir
        </button>
      </div>
    </AppCard>
  );
}