export const calculateValeTransporte = (
  employee
) => {

  if (
    !employee?.valeTransporte?.enabled
  ) {
    return 0;
  }

  const percentual =
    Number(
      employee
        .valeTransporte
        .percentual || 0
    );

  return (
    Number(
      employee.salario
    ) *
    (percentual / 100)
  );
};

export const calculateAbsenceDiscount = (
  employee,
  absences = 0
) => {

  const dailyRate =
    Number(employee.salario) /
    30;

  return (
    dailyRate *
    absences
  );
};