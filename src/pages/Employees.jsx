import { useState } from "react";

import EmployeeForm from "../components/EmployeeForm";
import EmployeeTable from "../components/EmployeeTable";
import ConfirmDialog from "../components/ConfirmDialog";

import useEmployees from "../hooks/useEmployees";

export default function Employees() {
  const {
    employees,
    addEmployee,
    updateEmployee,
    deleteEmployee,
  } = useEmployees();

  const [editing,
    setEditing] = useState(null);

  const [removing,
    setRemoving] = useState(null);

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
      <h2 className="text-2xl font-bold">
        Funcionários
      </h2>

      <div className="bg-white rounded-xl shadow p-6">
        <EmployeeForm
          employee={editing}
          onSave={saveEmployee}
        />
      </div>

      <div className="bg-white rounded-xl shadow p-6">
        <EmployeeTable
          employees={employees}
          onEdit={setEditing}
          onDelete={setRemoving}
        />
      </div>

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