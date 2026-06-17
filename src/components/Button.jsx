export default function Button({
  children,
  ...props
}) {
  return (
    <button
      className="
      px-4
      py-2
      rounded-lg
      bg-indigo-600
      text-white
      hover:bg-indigo-700
      "
      {...props}
    >
      {children}
    </button>
  );
}