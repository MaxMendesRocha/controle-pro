export default function StatCard({
  title,
  value
}) {
  return (
    <div
      className="
      bg-white
      dark:bg-slate-900

      border
      dark:border-slate-700

      rounded-xl

      shadow-sm

      p-5
      "
    >
      <h3
        className="
        text-slate-500
        dark:text-slate-400
        "
      >
        {title}
      </h3>

      <p
        className="
        text-3xl
        font-bold
        mt-2
        "
      >
        {value}
      </p>
    </div>
  );
}