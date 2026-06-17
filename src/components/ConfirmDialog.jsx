export default function ConfirmDialog({
  open,
  title,
  message,
  onConfirm,
  onCancel,
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl shadow-lg w-96">
        <h3 className="font-bold text-lg">
          {title}
        </h3>

        <p className="mt-2 text-slate-600">
          {message}
        </p>

        <div className="flex justify-end gap-2 mt-6">
          <button
            className="px-4 py-2 border rounded"
            onClick={onCancel}
          >
            Cancelar
          </button>

          <button
            className="px-4 py-2 bg-red-600 text-white rounded"
            onClick={onConfirm}
          >
            Excluir
          </button>
        </div>
      </div>
    </div>
  );
}