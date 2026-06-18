import {
  useContext
} from "react";

import {
  CompetencyContext
} from "../context/CompetencyContext";

export default function useCompetency() {

  return useContext(
    CompetencyContext
  );
}