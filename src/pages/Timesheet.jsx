import { useState } from "react";

import PageTitle from "../components/PageTitle";

import TimesheetSummary from "../components/TimesheetSummary";
import TimesheetFilters from "../components/TimesheetFilters";
import TimesheetFormCard from "../components/TimesheetFormCard";
import TimesheetCard from "../components/TimesheetCard";
import CompetencySelector from "../components/CompetencySelector";

import useEntries from "../hooks/useEntries";
import useEmployees from "../hooks/useEmployees";
import useCompetency from "../hooks/useCompetency";

import {
  calculateWorkedHours,
  isWeekend
} from "../utils/timesheetUtils";

import {
  parseTime
} from "../utils/hourUtils";

import {
  filterByCompetency
} from "../utils/competencyUtils";

export default function Timesheet() {

  const {
    entries,
    addEntry,
    updateEntry,
    deleteEntry
  } = useEntries();

  const {
    employees
  } = useEmployees();

  const {
    competency
  } = useCompetency();

  const [
    editing,
    setEditing
  ] = useState(null);

  const [
    selectedEmployee,
    setSelectedEmployee
  ] = useState("");

  const filteredEntries =
    filterByCompetency(
      entries,
      competency
    ).filter(entry => {

      if (
        !selectedEmployee
      ) {
        return true;
      }

      return (
        entry.empId ===
        selectedEmployee
      );
    });

  const saveEntry = (
    form
  ) => {

    const employee =
      employees.find(
        e =>
          e.id ===
          Number(
            form.empId
          )
      );

    if (!employee)
      return;

    let totalHoras = 0;

    if (
      employee.hasBreak
    ) {

      totalHoras =
        calculateWorkedHours(
          form
        );

    } else {

      totalHoras =
        parseTime(
          form.out1
        ) -
        parseTime(
          form.in1
        );
    }

    let extra50 = 0;
    let extra100 = 0;

    if (
      isWeekend(
        form.data
      )
    ) {

      extra100 =
        totalHoras;

    } else {

      if (
        totalHoras >
        Number(
          employee.horasDiarias
        )
      ) {

        extra50 =
          totalHoras -
          Number(
            employee.horasDiarias
          );
      }
    }

    const payload = {
      ...form,
      totalHoras,
      extra50,
      extra100
    };

    if (editing) {

      updateEntry(
        editing.id,
        payload
      );

      setEditing(null);

    } else {

      addEntry(payload);
    }
  };

  return (
    <div className="space-y-6">

      <PageTitle
        title="Registro de Ponto"
        subtitle="Controle das jornadas trabalhadas"
      />

      <CompetencySelector />

      <TimesheetSummary
        entries={
          filteredEntries
        }
      />

      <TimesheetFilters
        employees={
          employees
        }
        selectedEmployee={
          selectedEmployee
        }
        setSelectedEmployee={
          setSelectedEmployee
        }
        selectedMonth={
          competency
        }
        setSelectedMonth={() => {}}
      />

      <TimesheetFormCard
        employees={
          employees
        }
        onSave={
          saveEntry
        }
        editing={
          editing
        }
      />

      {filteredEntries.length === 0 ? (

        <div
          className="
          bg-white
          dark:bg-slate-900

          rounded-xl

          p-10

          text-center
          "
        >
          Nenhum registro encontrado.
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

          {filteredEntries.map(
            entry => {

              const employee =
                employees.find(
                  e =>
                    e.id ===
                    Number(
                      entry.empId
                    )
                );

              return (
                <TimesheetCard
                  key={
                    entry.id
                  }
                  entry={
                    entry
                  }
                  employee={
                    employee
                  }
                  onEdit={
                    setEditing
                  }
                  onDelete={
                    deleteEntry
                  }
                />
              );
            }
          )}

        </div>

      )}

    </div>
  );
}