export default function AppCard({
  children,
  className = ""
}) {
  return (
    <div
      className={`
        bg-white
        dark:bg-slate-900

        border
        border-slate-200
        dark:border-slate-700

        rounded-xl

        shadow-sm
        hover:shadow-md

        transition-all

        p-5

        ${className}
      `}
    >
      {children}
    </div>
  );
}