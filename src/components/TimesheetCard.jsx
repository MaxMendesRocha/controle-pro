import {
  Pencil,
  Trash2,
  CalendarDays,
  User
} from "lucide-react";

import AppCard from "./AppCard";

import {
  formatHours
} from "../utils/hourUtils";

export default function TimesheetCard({
  entry,
  employee,
  onEdit,
  onDelete
}) {
  const hasBreak =
    employee?.hasBreak;

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
            {employee?.nome}
          </h3>

          <div
            className="
            flex
            items-center
            gap-2

            text-slate-500
            dark:text-slate-400

            mt-1
            "
          >
            <CalendarDays
              size={16}
            />

            <span>
              {entry.data}
            </span>
          </div>
        </div>

        <User size={20} />
      </div>

      <div
        className="
        mt-5

        border-t
        dark:border-slate-700

        pt-4

        space-y-2
        "
      >
        <div className="flex justify-between">
          <span>
            Entrada
          </span>

          <strong>
            {entry.in1}
          </strong>
        </div>

        <div className="flex justify-between">
          <span>
            Saída
          </span>

          <strong>
            {entry.out1}
          </strong>
        </div>

        {hasBreak && (
          <>
            <div className="flex justify-between">
              <span>
                Retorno
              </span>

              <strong>
                {entry.in2}
              </strong>
            </div>

            <div className="flex justify-between">
              <span>
                Saída Final
              </span>

              <strong>
                {entry.out2}
              </strong>
            </div>
          </>
        )}
      </div>

      <div
        className="
        mt-5

        border-t
        dark:border-slate-700

        pt-4

        space-y-2
        "
      >
        <div className="flex justify-between">
          <span>
            Total Trabalhado
          </span>

          <strong>
            {formatHours(
              entry.totalHoras
            )}
          </strong>
        </div>

        {entry.extra50 > 0 && (
          <div className="flex justify-between">
            <span>
              Extra 50%
            </span>

            <strong
              className="
              text-amber-600
              "
            >
              {formatHours(
                entry.extra50
              )}
            </strong>
          </div>
        )}

        {entry.extra100 > 0 && (
          <div className="flex justify-between">
            <span>
              Extra 100%
            </span>

            <strong
              className="
              text-red-600
              "
            >
              {formatHours(
                entry.extra100
              )}
            </strong>
          </div>
        )}
      </div>

      <div
        className="
        mt-5

        flex
        justify-end
        gap-2
        "
      >
        <button
          onClick={() =>
            onEdit(entry)
          }
          className="
          bg-indigo-600
          hover:bg-indigo-700

          text-white

          px-3
          py-2

          rounded-lg

          transition
          "
        >
          <Pencil size={16}/>
        </button>

        <button
          onClick={() =>
            onDelete(entry.id)
          }
          className="
          bg-red-600
          hover:bg-red-700

          text-white

          px-3
          py-2

          rounded-lg

          transition
          "
        >
          <Trash2 size={16}/>
        </button>
      </div>
    </AppCard>
  );
}