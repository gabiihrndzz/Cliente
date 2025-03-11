import { useEffect, useState } from "react";

const FormNota = ({ nota, onSave, onCancel }) => {
  const [texto, setTexto] = useState("");
  const [importancia, setImportancia] = useState(3);

  const envioEvt = (e) => {
    e.preventDefault();
    const notaGuardar = {
      ...(nota || {}),
      texto,
      importancia: parseInt(importancia),
    };
    onSave(notaGuardar);
  };

  const cancelarEvt = () => {
    if (onCancel) onCancel();
  };

  useEffect(() => {
    if (nota) {
      setTexto(nota.texto);
      setImportancia(nota.importancia);
    }
  }, [nota]);

  return (
    <form
      onSubmit={envioEvt}
      className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md"
    >
      <h2 className="text-xl font-bold mb-4">{nota ? "Actualizar" : "Añadir"} Nota</h2>

      <label className="block mb-2">
        <span className="text-gray-700">Texto:</span>
        <input
          type="text"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          required
          className="w-full p-2 mt-1 border rounded-md"
        />
      </label>

      <label className="block mb-4">
        <span className="text-gray-700">Importancia (1-5):</span>
        <input
          type="number"
          min="1"
          max="5"
          value={importancia}
          onChange={(e) => setImportancia(parseInt(e.target.value) || 1)}
          required
          className="w-full p-2 mt-1 border rounded-md"
        />
      </label>

      <div className="flex justify-between">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          {nota ? "Guardar" : "Añadir"}
        </button>

        <button
          type="button"
          onClick={cancelarEvt}
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
        >
          Cancelar
        </button>
      </div>
    </form>
  );
};

export default FormNota;
