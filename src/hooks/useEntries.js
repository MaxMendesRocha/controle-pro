import useLocalStorage from "./useLocalStorage";

export default function useEntries() {
  const [
    entries,
    setEntries
  ] = useLocalStorage(
    "entries",
    []
  );

  const addEntry = (
    entry
  ) => {

    const duplicate =
      entries.find(
        e =>
          e.empId === entry.empId &&
          e.data === entry.data
      );

    if (duplicate) {
      throw new Error(
        "Já existe um lançamento para este funcionário nesta data."
      );
    }

    setEntries([
      ...entries,
      {
        ...entry,
        id: Date.now()
      }
    ]);
  };

  const updateEntry = (
    id,
    data
  ) => {

    const duplicate =
      entries.find(
        e =>
          e.id !== id &&
          e.empId === data.empId &&
          e.data === data.data
      );

    if (duplicate) {
      throw new Error(
        "Já existe um lançamento para este funcionário nesta data."
      );
    }

    setEntries(
      entries.map(entry =>
        entry.id === id
          ? {
              ...entry,
              ...data
            }
          : entry
      )
    );
  };

  const deleteEntry = (
    id
  ) => {

    setEntries(
      entries.filter(
        entry =>
          entry.id !== id
      )
    );
  };

  return {
    entries,
    addEntry,
    updateEntry,
    deleteEntry
  };
}