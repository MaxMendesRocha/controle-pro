import PageTitle from "../components/PageTitle";
import CompetencySelector from "../components/CompetencySelector";
import PayrollSummary from "../components/PayrollSummary";
import EmployeePayrollCard from "../components/EmployeePayrollCard";

import useEmployees from "../hooks/useEmployees";
import useEntries from "../hooks/useEntries";
import useCompetency from "../hooks/useCompetency";
import usePayrollAdjustments from "../hooks/usePayrollAdjustments";

import {
  calculateEmployeePayroll
} from "../utils/payrollCalculator";

import {
  filterByCompetency
} from "../utils/competencyUtils";

export default function Payroll() {

  const {
    employees
  } = useEmployees();

  const {
    entries
  } = useEntries();

  const {
    competency
  } = useCompetency();

  const {
    getAdjustment,
    saveAdjustment
  } = usePayrollAdjustments();

  const competencyEntries =
    filterByCompetency(
      entries,
      competency
    );

  const payrollData =
    employees.map(
      employee => {

        const adjustment =
          getAdjustment(
            employee.id,
            competency
          );

        const payroll =
          calculateEmployeePayroll(
            employee,
            competencyEntries,
            adjustment
          );

        return {
          employee,
          payroll,
          adjustment
        };
      }
    );

  const totalGross =
    payrollData.reduce(
      (acc, item) =>
        acc +
        item.payroll.grossSalary +
        item.payroll.additionalValue,
      0
    );

  const totalExtras =
    payrollData.reduce(
      (acc, item) =>
        acc +
        item.payroll.totalExtras,
      0
    );

  const totalDiscounts =
    payrollData.reduce(
      (acc, item) =>
        acc +
        item.payroll.totalDiscounts,
      0
    );

  const totalNet =
    payrollData.reduce(
      (acc, item) =>
        acc +
        item.payroll.netSalary,
      0
    );

  return (
    <div className="space-y-6">

      <PageTitle
        title="Folha de Pagamento"
        subtitle={`Competência ${competency}`}
      />

      {/* Competência */}

      <div
        className="
        bg-white
        dark:bg-slate-900

        rounded-2xl

        shadow-sm

        p-4
        "
      >
        <CompetencySelector />
      </div>

      {/* Resumo Geral */}

      <PayrollSummary
        totalGross={
          totalGross
        }
        totalExtras={
          totalExtras
        }
        totalDiscounts={
          totalDiscounts
        }
        totalPayroll={
          totalNet
        }
      />

      {/* Funcionários */}

      <div
        className="
        grid

        grid-cols-1
        xl:grid-cols-2

        gap-6
        "
      >
        {payrollData.map(
          ({
            employee,
            payroll,
            adjustment
          }) => (

            <EmployeePayrollCard
              key={
                employee.id
              }
              employee={
                employee
              }
              payroll={{
                ...payroll,
                notes:
                  adjustment.notes
              }}
              adjustment={
                adjustment
              }
              onSaveAdjustment={(
                values
              ) =>
                saveAdjustment({

                  employeeId:
                    employee.id,

                  competency,

                  advance:
                    Number(
                      values.advance || 0
                    ),

                  absences:
                    Number(
                      values.absences || 0
                    ),

                  applyVT:
                    values.applyVT,

                  additionalValue:
                    Number(
                      values.additionalValue || 0
                    ),

                  discountValue:
                    Number(
                      values.discountValue || 0
                    ),

                  notes:
                    values.notes || ""

                })
              }
            />

          )
        )}
      </div>

      {employees.length === 0 && (

        <div
          className="
          bg-white
          dark:bg-slate-900

          rounded-2xl

          shadow-sm

          p-12

          text-center
          "
        >
          <h3
            className="
            text-lg
            font-semibold
            "
          >
            Nenhum funcionário cadastrado
          </h3>

          <p
            className="
            text-slate-500

            mt-2
            "
          >
            Cadastre um funcionário para
            visualizar a folha de pagamento.
          </p>
        </div>

      )}

    </div>
  );
}