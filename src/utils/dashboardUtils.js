export const calculateDashboardData = (
  employees,
  entries
) => {

  const totalEmployees =
    employees.length;

  const totalHours =
    entries.reduce(
      (acc, entry) =>
        acc +
        (entry.totalHoras || 0),
      0
    );

  const totalExtra50 =
    entries.reduce(
      (acc, entry) =>
        acc +
        (entry.extra50 || 0),
      0
    );

  const totalExtra100 =
    entries.reduce(
      (acc, entry) =>
        acc +
        (entry.extra100 || 0),
      0
    );

  const payrollProjection =
    employees.reduce(
      (acc, employee) =>
        acc +
        Number(
          employee.salario || 0
        ),
      0
    );

  return {
    totalEmployees,
    totalHours,
    totalExtra50,
    totalExtra100,
    payrollProjection
  };
};