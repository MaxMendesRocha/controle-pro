import { useState } from "react";

import EmployeeForm from "../components/EmployeeForm";
import EmployeeCard from "../components/EmployeeCard";
import ConfirmDialog from "../components/ConfirmDialog";

import useEmployees from "../hooks/useEmployees";

import PageTitle from "../components/PageTitle";

export default function Employees() {
  const {
    employees,
    addEmployee,
    updateEmployee,
    deleteEmployee
  } = useEmployees();

  const [
    editing,
    setEditing
  ] = useState(null);

  const [
    removing,
    setRemoving
  ] = useState(null);

  const saveEmployee = (
    employee
  ) => {
    if (editing) {
      updateEmployee(
        editing.id,
        employee
      );

      setEditing(null);
    } else {
      addEmployee(employee);
    }
  };

  return (
    <div className="space-y-6">
      <PageTitle
        title="Funcionários"
        subtitle="Gerencie os colaboradores cadastrados"
      />

      <div
        className="
        bg-white
        dark:bg-slate-900

        rounded-xl
        shadow-sm

        p-6
        "
      >
        <EmployeeForm
          employee={editing}
          onSave={saveEmployee}
        />
      </div>

      {employees.length === 0 ? (
        <div
          className="
          bg-white
          dark:bg-slate-900

          rounded-xl

          p-10

          text-center
          "
        >
          Nenhum funcionário cadastrado.
        </div>
      ) : (
        <div
          className="
          grid

          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3

          gap-4
          "
        >
          {employees.map(
            employee => (
              <EmployeeCard
                key={employee.id}
                employee={employee}
                onEdit={setEditing}
                onDelete={setRemoving}
              />
            )
          )}
        </div>
      )}

      <ConfirmDialog
        open={!!removing}
        title="Excluir funcionário"
        message={`Deseja realmente excluir ${removing?.nome}?`}
        onCancel={() =>
          setRemoving(null)
        }
        onConfirm={() => {
          deleteEmployee(
            removing.id
          );

          setRemoving(null);
        }}
      />
    </div>
  );
}