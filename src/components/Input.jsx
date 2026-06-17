export default function Input({
  label,
  ...props
}) {
  return (
    <div className="space-y-1">
      <label>
        {label}
      </label>

      <input
        className="
        w-full
        border
        rounded-lg
        p-2
        "
        {...props}
      />
    </div>
  );
}