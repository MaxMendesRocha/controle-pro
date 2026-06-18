import { useState, useEffect } from "react";

export default function EmployeeForm({
  employee,
  onSave
}) {

  const initialState = {
    nome: "",
    cpf: "",
    cargo: "",
    salario: "",
    horasDiarias: "",
    horasMensais: "",
    hasBreak: false,

    valeTransporte: {
      enabled: false,
      percentual: 6
    }
  };

  const [form, setForm] =
    useState(initialState);

  useEffect(() => {

    if (employee) {

      setForm({
        ...initialState,
        ...employee,

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
      });

    }

  }, [employee]);

  const handleChange = (
    e
  ) => {

    const {
      name,
      value,
      type,
      checked
    } = e.target;

    setForm(prev => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : value
    }));
  };

  const submit = (
    e
  ) => {

    e.preventDefault();

    onSave(form);

    setForm(initialState);
  };

  return (
    <form
      onSubmit={submit}
      className="
      grid
      md:grid-cols-2
      gap-4
      "
    >

      <input
        type="text"
        name="nome"
        placeholder="Nome"
        value={form.nome}
        onChange={handleChange}
        required
        className="
        border
        rounded-lg
        p-2
        "
      />

      <input
        type="text"
        name="cpf"
        placeholder="CPF"
        value={form.cpf}
        onChange={handleChange}
        required
        className="
        border
        rounded-lg
        p-2
        "
      />

      <input
        type="text"
        name="cargo"
        placeholder="Cargo"
        value={form.cargo}
        onChange={handleChange}
        required
        className="
        border
        rounded-lg
        p-2
        "
      />

      <input
        type="number"
        name="salario"
        placeholder="Salário"
        value={form.salario}
        onChange={handleChange}
        required
        className="
        border
        rounded-lg
        p-2
        "
      />

      <input
        type="number"
        name="horasDiarias"
        placeholder="Horas diárias"
        value={form.horasDiarias}
        onChange={handleChange}
        required
        className="
        border
        rounded-lg
        p-2
        "
      />

      <input
        type="number"
        name="horasMensais"
        placeholder="Horas mensais"
        value={form.horasMensais}
        onChange={handleChange}
        required
        className="
        border
        rounded-lg
        p-2
        "
      />

      <div className="md:col-span-2">
        <label
          className="
          flex
          items-center
          gap-2
          "
        >
          <input
            type="checkbox"
            name="hasBreak"
            checked={form.hasBreak}
            onChange={handleChange}
          />

          Possui intervalo?
        </label>
      </div>

      <div className="md:col-span-2">
        <label
          className="
          flex
          items-center
          gap-2
          "
        >
          <input
            type="checkbox"
            checked={
              form.valeTransporte
                .enabled
            }
            onChange={(e) =>
              setForm(prev => ({
                ...prev,

                valeTransporte: {
                  ...prev.valeTransporte,
                  enabled:
                    e.target.checked
                }
              }))
            }
          />

          Utiliza Vale Transporte
        </label>
      </div>

      {form.valeTransporte
        .enabled && (

        <input
          type="number"
          min="0"
          max="100"
          placeholder="% Desconto VT"

          value={
            form.valeTransporte
              .percentual
          }

          onChange={(e) =>
            setForm(prev => ({
              ...prev,

              valeTransporte: {
                ...prev.valeTransporte,

                percentual:
                  Number(
                    e.target.value
                  )
              }
            }))
          }

          className="
          border
          rounded-lg
          p-2
          "
        />
      )}

      <button
        type="submit"
        className="
        md:col-span-2

        bg-indigo-600
        hover:bg-indigo-700

        text-white

        rounded-lg

        p-3

        transition
        "
      >
        {employee
          ? "Atualizar Funcionário"
          : "Salvar Funcionário"}
      </button>

    </form>
  );
}