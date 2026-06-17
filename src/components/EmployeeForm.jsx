import { useState, useEffect } from "react";

export default function EmployeeForm({
  employee,
  onSave,
}) {
  const [form, setForm] = useState({
    nome: "",
    cpf: "",
    cargo: "",
    salario: "",
    horasDiarias: "",
    horasMensais: "",
  });

  useEffect(() => {
    if (employee) {
      setForm(employee);
    }
  }, [employee]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();

    onSave(form);

    setForm({
      nome: "",
      cpf: "",
      cargo: "",
      salario: "",
      horasDiarias: "",
      horasMensais: "",
    });
  };

  return (
    <form
      onSubmit={submit}
      className="grid md:grid-cols-2 gap-4"
    >
      <input
        name="nome"
        placeholder="Nome"
        value={form.nome}
        onChange={handleChange}
        className="border p-2 rounded"
        required
      />

      <input
        name="cpf"
        placeholder="CPF"
        value={form.cpf}
        onChange={handleChange}
        className="border p-2 rounded"
        required
      />

      <input
        name="cargo"
        placeholder="Cargo"
        value={form.cargo}
        onChange={handleChange}
        className="border p-2 rounded"
        required
      />

      <input
        name="salario"
        type="number"
        placeholder="Salário"
        value={form.salario}
        onChange={handleChange}
        className="border p-2 rounded"
        required
      />

      <input
        name="horasDiarias"
        type="number"
        placeholder="Horas por dia"
        value={form.horasDiarias}
        onChange={handleChange}
        className="border p-2 rounded"
        required
      />

      <input
        name="horasMensais"
        type="number"
        placeholder="Horas mensais"
        value={form.horasMensais}
        onChange={handleChange}
        className="border p-2 rounded"
        required
      />

      <button
        className="
        bg-indigo-600
        text-white
        rounded
        p-2
        col-span-2
        "
      >
        Salvar
      </button>
    </form>
  );
}