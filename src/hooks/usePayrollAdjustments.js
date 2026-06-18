import useLocalStorage from "./useLocalStorage";

export default function usePayrollAdjustments() {

  const [
    adjustments,
    setAdjustments
  ] = useLocalStorage(
    "payrollAdjustments",
    []
  );

  const getAdjustment = (
    employeeId,
    competency
  ) => {

    return (
      adjustments.find(
        item =>
          Number(
            item.employeeId
          ) ===
            Number(
              employeeId
            ) &&
          item.competency ===
            competency
      ) || {
        employeeId,
        competency,
        advance: 0,
        absences: 0
      }
    );
  };

  const saveAdjustment = (
    adjustment
  ) => {

    const exists =
      adjustments.find(
        item =>
          Number(
            item.employeeId
          ) ===
            Number(
              adjustment.employeeId
            ) &&
          item.competency ===
            adjustment.competency
      );

    if (exists) {

      setAdjustments(
        adjustments.map(
          item =>
            Number(
              item.employeeId
            ) ===
              Number(
                adjustment.employeeId
              ) &&
            item.competency ===
              adjustment.competency
              ? {
                  ...item,
                  ...adjustment
                }
              : item
        )
      );

      return;
    }

    setAdjustments([
      ...adjustments,
      adjustment
    ]);
  };

  const deleteAdjustment = (
    employeeId,
    competency
  ) => {

    setAdjustments(
      adjustments.filter(
        item =>
          !(
            Number(
              item.employeeId
            ) ===
              Number(
                employeeId
              ) &&
            item.competency ===
              competency
          )
      )
    );
  };

  const getAdjustmentsByCompetency =
    (
      competency
    ) => {

      return adjustments.filter(
        item =>
          item.competency ===
          competency
      );
    };

  return {
    adjustments,

    getAdjustment,

    saveAdjustment,

    deleteAdjustment,

    getAdjustmentsByCompetency
  };
}