export const parseTime = (
  timeString
) => {
  if (!timeString) return 0;

  const [h, m] =
    timeString
      .split(":")
      .map(Number);

  return h + m / 60;
};

export const formatHours = (
  decimalHours
) => {
  const h =
    Math.floor(decimalHours);

  const m =
    Math.round(
      (decimalHours - h) * 60
    );

  return `${String(h).padStart(
    2,
    "0"
  )}:${String(m).padStart(
    2,
    "0"
  )}`;
};