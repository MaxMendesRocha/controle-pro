import useLocalStorage from "./useLocalStorage";

export default function useEmployees() {
  const [employees, setEmployees] = useLocalStorage(
    "employees",
    []
  );

  const addEmployee = (employee) => {
    setEmployees([
      ...employees,
      {
        ...employee,
        id: Date.now(),
      },
    ]);
  };

  const updateEmployee = (id, data) => {
    setEmployees(
      employees.map((emp) =>
        emp.id === id
          ? { ...emp, ...data }
          : emp
      )
    );
  };

  const deleteEmployee = (id) => {
    setEmployees(
      employees.filter(
        (emp) => emp.id !== id
      )
    );
  };

  return {
    employees,
    addEmployee,
    updateEmployee,
    deleteEmployee,
  };
}