import useLocalStorage from "./useLocalStorage";

export default function useEmployees() {

  const [
    employees,
    setEmployees
  ] = useLocalStorage(
    "employees",
    []
  );

  const normalizeEmployee = (
    employee
  ) => {

    return {
      ...employee,

      hasBreak:
        employee.hasBreak ??
        false,

      valeTransporte: {
        enabled:
          employee
            ?.valeTransporte
            ?.enabled ??
          false,

        percentual:
          employee
            ?.valeTransporte
            ?.percentual ??
          6
      }
    };
  };

  const addEmployee = (
    employee
  ) => {

    const newEmployee =
      normalizeEmployee({
        ...employee,
        id: Date.now()
      });

    setEmployees([
      ...employees,
      newEmployee
    ]);
  };

  const updateEmployee = (
    id,
    updatedEmployee
  ) => {

    const normalized =
      normalizeEmployee(
        updatedEmployee
      );

    setEmployees(
      employees.map(
        employee =>
          employee.id === id
            ? {
                ...employee,
                ...normalized,
                id
              }
            : employee
      )
    );
  };

  const deleteEmployee = (
    id
  ) => {

    setEmployees(
      employees.filter(
        employee =>
          employee.id !== id
      )
    );
  };

  const getEmployeeById = (
    id
  ) => {

    return employees.find(
      employee =>
        employee.id === id
    );
  };

  return {
    employees:
      employees.map(
        normalizeEmployee
      ),

    addEmployee,

    updateEmployee,

    deleteEmployee,

    getEmployeeById
  };
}