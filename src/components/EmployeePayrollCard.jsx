import { useState, useEffect } from "react";

import AppCard from "./AppCard";

import {
  formatCurrency
} from "../utils/currencyUtils";

import {
  formatHours
} from "../utils/hourUtils";

export default function EmployeePayrollCard({
  employee,
  payroll,
  adjustment,
  onSaveAdjustment
}) {

  const [form, setForm] =
    useState(adjustment);

  useEffect(() => {
    setForm(adjustment);
  }, [adjustment]);

  const updateField = (
    field,
    value
  ) => {

    const updated = {
      ...form,
      [field]: value
    };

    setForm(updated);

    onSaveAdjustment(updated);
  };

  const gross =
    payroll.grossSalary +
    payroll.additionalValue;

  return (
    <AppCard>

      <div className="flex justify-between items-start">

        <div>
          <h3
            className="
            text-xl
            font-bold
            "
          >
            {employee.nome}
          </h3>

          <p
            className="
            text-sm
            text-slate-500
            "
          >
            {employee.cargo}
          </p>
        </div>

      </div>

      <div
        className="
        grid
        grid-cols-3
        gap-3
        mt-5
        "
      >

        <div
          className="
          bg-slate-50
          dark:bg-slate-800
          rounded-xl
          p-3
          text-center
          "
        >
          <p
            className="
            text-xs
            text-slate-500
            "
          >
            Bruto
          </p>

          <strong
            className="
            text-blue-600
            "
          >
            {formatCurrency(gross)}
          </strong>
        </div>

        <div
          className="
          bg-red-50
          dark:bg-red-900/20
          rounded-xl
          p-3
          text-center
          "
        >
          <p
            className="
            text-xs
            text-slate-500
            "
          >
            Descontos
          </p>

          <strong
            className="
            text-red-600
            "
          >
            {formatCurrency(
              payroll.totalDiscounts
            )}
          </strong>
        </div>

        <div
          className="
          bg-green-50
          dark:bg-green-900/20
          rounded-xl
          p-3
          text-center
          "
        >
          <p
            className="
            text-xs
            text-slate-500
            "
          >
            Líquido
          </p>

          <strong
            className="
            text-green-600
            "
          >
            {formatCurrency(
              payroll.netSalary
            )}
          </strong>
        </div>

      </div>

      <div
        className="
        mt-6
        border-t
        pt-5
        "
      >

        <h4
          className="
          font-semibold
          mb-4
          "
        >
          Ajustes
        </h4>

        <div
          className="
          grid
          md:grid-cols-2
          gap-3
          "
        >

          <input
            type="number"
            placeholder="Adiantamento"
            value={form.advance}
            onChange={(e)=>
              updateField(
                "advance",
                Number(
                  e.target.value
                ) || 0
              )
            }
            className="
            border
            rounded-lg
            p-2
            "
          />

          <input
            type="number"
            placeholder="Faltas"
            value={form.absences}
            onChange={(e)=>
              updateField(
                "absences",
                Number(
                  e.target.value
                ) || 0
              )
            }
            className="
            border
            rounded-lg
            p-2
            "
          />

          <input
            type="number"
            placeholder="Adicional"
            value={
              form.additionalValue
            }
            onChange={(e)=>
              updateField(
                "additionalValue",
                Number(
                  e.target.value
                ) || 0
              )
            }
            className="
            border
            rounded-lg
            p-2
            "
          />

          <input
            type="number"
            placeholder="Desconto"
            value={
              form.discountValue
            }
            onChange={(e)=>
              updateField(
                "discountValue",
                Number(
                  e.target.value
                ) || 0
              )
            }
            className="
            border
            rounded-lg
            p-2
            "
          />

        </div>

        <label
          className="
          flex
          items-center
          gap-2
          mt-4
          "
        >
          <input
            type="checkbox"
            checked={
              form.applyVT
            }
            onChange={(e)=>
              updateField(
                "applyVT",
                e.target.checked
              )
            }
          />

          Aplicar Vale Transporte
        </label>

        <textarea
          rows={3}
          placeholder="Observações"
          value={form.notes}
          onChange={(e)=>
            updateField(
              "notes",
              e.target.value
            )
          }
          className="
          mt-4
          w-full
          border
          rounded-lg
          p-2
          "
        />

      </div>

      <div
        className="
        mt-6
        border-t
        pt-5
        "
      >

        <h4
          className="
          font-semibold
          mb-4
          "
        >
          Detalhamento
        </h4>

        <div className="space-y-2">

          <div className="flex justify-between">
            <span>Salário Base</span>
            <strong>
              {formatCurrency(
                employee.salario
              )}
            </strong>
          </div>

          <div className="flex justify-between">
            <span>Horas Trabalhadas</span>
            <strong>
              {formatHours(
                payroll.totalHours
              )}
            </strong>
          </div>

          <div className="flex justify-between">
            <span>Extras</span>
            <strong>
              {formatCurrency(
                payroll.totalExtras
              )}
            </strong>
          </div>

          <div className="flex justify-between">
            <span>Vale Transporte</span>
            <strong className="text-red-600">
              -
              {formatCurrency(
                payroll.vt
              )}
            </strong>
          </div>

          <div className="flex justify-between">
            <span>Total Descontos</span>
            <strong className="text-red-600">
              -
              {formatCurrency(
                payroll.totalDiscounts
              )}
            </strong>
          </div>

          <div
            className="
            flex
            justify-between

            border-t
            pt-3
            mt-3
            "
          >
            <span
              className="
              font-bold
              "
            >
              Salário Líquido
            </span>

            <strong
              className="
              text-green-600
              text-lg
              "
            >
              {formatCurrency(
                payroll.netSalary
              )}
            </strong>
          </div>

        </div>

      </div>

    </AppCard>
  );
}