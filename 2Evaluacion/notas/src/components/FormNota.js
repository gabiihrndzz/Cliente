import { useState, useEffect } from "react";
const FormNota = ({ nota, onSave, onCancel }) => {
    const [texto, setTexto] = useState('');
    const [importancia, setImportancia] = useState(3);

    const envioEvt = (e) => {
        e.preventDefault();
        const notaGuardar = {
            ...(nota || {}),
            texto,
            importancia: parseInt(importancia)
        }
        onSave(notaGuardar);
    }

    const cancelarEvt = () => {
        if (onCancel) onCancel();
    }

    useEffect(() => {
        if (nota) {
            setTexto(nota.texto);
            setImportancia(nota.importancia);
        }
    }, [nota]);

    return (
        <form onSubmit={envioEvt}>
            <h2>{nota ? "Actualizar" : "Añadir"}</h2>
            <label>
                Texto:
                <input type="text" value={texto} onChange={(e) => setTexto(e.target.value)}
                    required />
            </label>
            <label>
                Importancia (1-5):
                <input type="number" min="1" max="5" value={importancia}
                    onChange={(e) => setImportancia(e.target.value)} required />
            </label>
            <button type="submit">{nota ? "Guardar" : "Añadir"}</button>
            <button type="button" onClick={cancelarEvt}>
                Cancelar
            </button>
        </form>
    )
}
export default FormNota;