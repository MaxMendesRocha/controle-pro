import {
  createContext,
  useState
} from "react";

export const CompetencyContext =
  createContext();

export function CompetencyProvider({
  children
}) {

  const currentDate =
    new Date();

  const currentCompetency =
    `${currentDate.getFullYear()}-${String(
      currentDate.getMonth() + 1
    ).padStart(2, "0")}`;

  const [
    competency,
    setCompetency
  ] = useState(
    localStorage.getItem(
      "competency"
    ) || currentCompetency
  );

  const changeCompetency =
    value => {

      localStorage.setItem(
        "competency",
        value
      );

      setCompetency(value);
    };

  return (
    <CompetencyContext.Provider
      value={{
        competency,
        changeCompetency
      }}
    >
      {children}
    </CompetencyContext.Provider>
  );
}