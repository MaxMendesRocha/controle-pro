import {
  calculateValeTransporte,
  calculateAbsenceDiscount
} from "./payrollDiscounts";

export const calculateEmployeePayroll = (
  employee,
  entries,
  adjustments = {}
) => {

  const employeeEntries =
    entries.filter(
      entry =>
        Number(
          entry.empId
        ) === employee.id
    );

  const totalHours =
    employeeEntries.reduce(
      (acc, entry) =>
        acc +
        (entry.totalHoras || 0),
      0
    );

  const totalExtra50 =
    employeeEntries.reduce(
      (acc, entry) =>
        acc +
        (entry.extra50 || 0),
      0
    );

  const totalExtra100 =
    employeeEntries.reduce(
      (acc, entry) =>
        acc +
        (entry.extra100 || 0),
      0
    );

  const hourlyRate =
    Number(employee.salario) /
    Number(
      employee.horasMensais || 1
    );

  const extra50Value =
    totalExtra50 *
    hourlyRate *
    1.5;

  const extra100Value =
    totalExtra100 *
    hourlyRate *
    2;

  const totalExtras =
    extra50Value +
    extra100Value;

  const grossSalary =
    Number(employee.salario) +
    totalExtras;

  const advance =
    Number(
      adjustments.advance || 0
    );

  const absences =
    Number(
      adjustments.absences || 0
    );

  const additionalValue =
    Number(
      adjustments.additionalValue || 0
    );

  const discountValue =
    Number(
      adjustments.discountValue || 0
    );

  const applyVT =
    adjustments.applyVT ?? true;

  const vt =
    applyVT
      ? calculateValeTransporte(
          employee
        )
      : 0;

  const absenceDiscount =
    calculateAbsenceDiscount(
      employee,
      absences
    );

  const totalDiscounts =
    vt +
    advance +
    absenceDiscount +
    discountValue;

  const netSalary =
    grossSalary +
    additionalValue -
    totalDiscounts;

  return {
    totalHours,

    totalExtra50,
    totalExtra100,

    hourlyRate,

    extra50Value,
    extra100Value,

    totalExtras,

    grossSalary,

    advance,

    vt,

    absenceDiscount,

    additionalValue,

    discountValue,

    totalDiscounts,

    netSalary
  };
};