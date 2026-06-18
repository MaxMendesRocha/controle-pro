export default function EmptyState({
  message
}) {
  return (
    <div
      className="
      bg-white
      rounded-xl
      p-10
      text-center
      "
    >
      <p>
        {message}
      </p>
    </div>
  );
}