import "./ListadoNotas.css";
import { useState, useEffect } from "react";
import { getAllNotas, deleteNota, updateNota, addNota } from "../notasServer";
import FormNota from "./FormNota";
const ListadoNotas = () => {
    const [notas, setNotas] = useState([]);
    const [notaActual, setNotaActual] = useState(null);
    const [formVisible, setFormVisible] = useState(false);
    const loadNotas = async () => {
        try {
            const notasServer = await getAllNotas();
            setNotas(notasServer);
        } catch (error) {
            console.error("Error al cargar las notas:", error);
        }
    };
    const showForm = (nota) => {
        setNotaActual(nota);
        setFormVisible(true);
    };
    const updateNotaEvt = (nota) => showForm(nota);
    const deleteNotaEvt = async (idNota) => {
        let mensajeError = `Se ha producido un error al borrar la nota con identificador ${idNota}`;
        try {
            const exito = await deleteNota(idNota);
            if (!exito) alert(mensajeError);
            else {
                alert(`La nota con identificador ${idNota} se ha borrado correctamente`);
                loadNotas();
            }
        } catch (error) {
            alert(mensajeError, error);
        }
    };
    const saveNotaEvt = async (nota) => {
        try {
            // Si la nota tiene id, se trata de una actualización, si no, es nueva
            if (nota.id) {
                await updateNota(nota);
                alert(
                    `Se ha modificado la nota con identificador ${nota.id} correctamente`
                );
            } else {
                const nuevaNota = await addNota(nota);
                alert(`La nota se ha añadido correctamente con id ${nuevaNota.id}`);
            }
            // Se recargan las notas y se oculta el form
            loadNotas();
            setFormVisible(false);
        } catch (error) {
            alert("Se ha producido un error al guardar la nota: ", error);
        }
    };
    useEffect(() => { loadNotas(); }, []);
    return (
        <>
            <button onClick={() => showForm()}>
                Añadir Nota
            </button>
            <table className="tabla">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Texto</th>
                        <th>Importancia</th>
                    </tr>
                </thead>
                <tbody>
                    {notas?.map((nota) => (
                        <tr key={nota.id} className="fila">
                            <td className="celda-id">{nota.id}</td>
                            <td className="celda-texto">{nota.texto}</td>
                            <td className="celda-importancia">{nota.importancia}</td>
                            <td>
                                <button onClick={() => updateNotaEvt(nota)}>Actualizar</button>
                                <button onClick={() => deleteNotaEvt(nota.id)}>Borrar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {formVisible && (
                <FormNota
                    nota={notaActual}
                    onSave={saveNotaEvt}
                    onCancel={() => setFormVisible(false)}
                />
            )}
        </>
    );
};
export default ListadoNotas;