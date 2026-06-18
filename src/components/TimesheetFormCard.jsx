import {
  useState,
  useEffect
} from "react";

import AppCard from "./AppCard";

export default function TimesheetFormCard({
  employees,
  onSave,
  editing
}) {

  const [error,
    setError] =
    useState("");

  const [form,
    setForm] =
    useState({
      empId: "",
      data: "",
      in1: "",
      out1: "",
      in2: "",
      out2: ""
    });

  useEffect(() => {
    if (editing) {
      setForm(editing);
    }
  }, [editing]);

  const employee =
    employees.find(
      e =>
        e.id ===
        Number(form.empId)
    );

  const hasBreak =
    employee?.hasBreak;

  const handleChange =
    (e) => {

    setForm({
      ...form,
      [e.target.name]:
        e.target.value
    });
  };

  const submit =
    (e) => {

    e.preventDefault();

    try {

      setError("");

      onSave(form);

      if (!editing) {
        setForm({
          empId: "",
          data: "",
          in1: "",
          out1: "",
          in2: "",
          out2: ""
        });
      }

    } catch (err) {

      setError(
        err.message
      );
    }
  };

  return (
    <AppCard>

      {error && (
        <div
          className="
          bg-red-100
          text-red-700
          rounded-lg
          p-3
          mb-4
          "
        >
          {error}
        </div>
      )}

      <form
        onSubmit={submit}
        className="
        grid
        md:grid-cols-2
        gap-4
        "
      >

        <select
          name="empId"
          value={form.empId}
          onChange={
            handleChange
          }
          required
          className="
          border
          rounded-lg
          p-2
          "
        >
          <option value="">
            Funcionário
          </option>

          {employees.map(emp => (
            <option
              key={emp.id}
              value={emp.id}
            >
              {emp.nome}
            </option>
          ))}
        </select>

        <input
          type="date"
          name="data"
          value={form.data}
          onChange={
            handleChange
          }
          required
          className="
          border
          rounded-lg
          p-2
          "
        />

        <input
          type="time"
          name="in1"
          value={form.in1}
          onChange={
            handleChange
          }
          required
          className="
          border
          rounded-lg
          p-2
          "
        />

        <input
          type="time"
          name="out1"
          value={form.out1}
          onChange={
            handleChange
          }
          required
          className="
          border
          rounded-lg
          p-2
          "
        />

        {hasBreak && (
          <>
            <input
              type="time"
              name="in2"
              value={form.in2}
              onChange={
                handleChange
              }
              required
              className="
              border
              rounded-lg
              p-2
              "
            />

            <input
              type="time"
              name="out2"
              value={form.out2}
              onChange={
                handleChange
              }
              required
              className="
              border
              rounded-lg
              p-2
              "
            />
          </>
        )}

        <button
          className="
          bg-indigo-600
          hover:bg-indigo-700
          text-white

          rounded-lg

          p-3

          md:col-span-2
          "
        >
          {editing
            ? "Atualizar Registro"
            : "Salvar Registro"}
        </button>

      </form>

    </AppCard>
  );
}