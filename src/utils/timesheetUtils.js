import { parseTime } from "./hourUtils";

export const calculateWorkedHours = ({
  in1,
  out1,
  in2,
  out2
}) => {

  const morning =
    parseTime(out1)
    -
    parseTime(in1);

  const afternoon =
    parseTime(out2)
    -
    parseTime(in2);

  return (
    morning +
    afternoon
  );
};

export const isWeekend =
  (date) => {

  const d =
    new Date(
      date +
      "T12:00:00"
    );

  return (
    d.getDay() === 0 ||
    d.getDay() === 6
  );
};