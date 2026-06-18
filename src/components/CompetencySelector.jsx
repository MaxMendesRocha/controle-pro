import useCompetency from "../hooks/useCompetency";

export default function CompetencySelector() {

  const {
    competency,
    changeCompetency
  } = useCompetency();

  return (
    <div
      className="
      bg-white
      dark:bg-slate-900

      rounded-xl

      shadow-sm

      p-4
      "
    >
      <label
        className="
        block
        mb-2
        font-medium
        "
      >
        Competência
      </label>

      <input
        type="month"
        value={competency}
        onChange={(e) =>
          changeCompetency(
            e.target.value
          )
        }
        className="
        border
        rounded-lg
        p-2
        "
      />
    </div>
  );
}