import { useState }
from "react";

import useEmployees
from "../hooks/useEmployees";

export default function TimesheetForm({
  onSave,
}) {

  const {
    employees
  } =
  useEmployees();

  const [form,
    setForm] =
    useState({
      empId: "",
      data: "",
      in1: "",
      out1: "",
      in2: "",
      out2: "",
    });

  const handleChange =
    (e) => {

    setForm({
      ...form,
      [e.target.name]:
      e.target.value,
    });
  };

  const submit =
    (e) => {

    e.preventDefault();

    onSave(form);

    setForm({
      empId: "",
      data: "",
      in1: "",
      out1: "",
      in2: "",
      out2: "",
    });
  };

  return (
    <form
      onSubmit={submit}
      className="
      grid
      md:grid-cols-3
      gap-4
      "
    >

      <select
        name="empId"
        value={form.empId}
        onChange={handleChange}
        required
        className="
        border
        p-2
        rounded
        "
      >
        <option value="">
          Funcionário
        </option>

        {employees.map(
          emp => (
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
        onChange={handleChange}
        required
        className="
        border
        p-2
        rounded
        "
      />

      <div />

      <input
        type="time"
        name="in1"
        value={form.in1}
        onChange={handleChange}
        required
      />

      <input
        type="time"
        name="out1"
        value={form.out1}
        onChange={handleChange}
        required
      />

      <div />

      <input
        type="time"
        name="in2"
        value={form.in2}
        onChange={handleChange}
        required
      />

      <input
        type="time"
        name="out2"
        value={form.out2}
        onChange={handleChange}
        required
      />

      <button
        className="
        bg-indigo-600
        text-white
        rounded
        p-2
        "
      >
        Salvar Ponto
      </button>
    </form>
  );
}