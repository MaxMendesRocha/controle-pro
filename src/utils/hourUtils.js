export const parseTime = (
  timeString
) => {
  if (!timeString) return 0;

  const [hours, minutes] =
    timeString
      .split(":")
      .map(Number);

  return (
    hours +
    minutes / 60
  );
};

export const formatHours = (
  decimalHours
) => {

  if (
    decimalHours === null ||
    decimalHours === undefined
  ) {
    return "00:00";
  }

  const totalMinutes =
    Math.round(
      decimalHours * 60
    );

  const hours =
    Math.floor(
      totalMinutes / 60
    );

  const minutes =
    totalMinutes % 60;

  return `${String(
    hours
  ).padStart(2, "0")}:${String(
    minutes
  ).padStart(2, "0")}`;
};