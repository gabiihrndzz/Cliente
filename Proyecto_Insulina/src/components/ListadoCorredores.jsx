import React from 'react';
import '../App.css';
const ListadoCorredores = ({ pilotos }) => {
    return (
        <table>
            <tr>
                <td>
                    ID
                </td>
                <td>
                    Referencia
                </td>
                <td>
                    Código
                </td>
                <td>
                    Apellidos, Nombre
                </td>
                <td>
                    URL
                </td>
            </tr>
            {pilotos.length === 0 ? (
                <tr>No hay pilotos disponibles.</tr>
            ) : (
                pilotos.map((piloto, index) => (
                    <tr key={piloto.driverId}>
                        <td>
                            {piloto.driverId ? piloto.driverId : 'No hay ningún piloto con ese ID'}
                        </td>
                        <td>
                            {piloto.driverRef ? piloto.driverRef : 'No hay ningún piloto con esa referencia'}
                        </td>
                        <td>
                            {piloto.code ? piloto.code : 'No hay ningún piloto con ese codigo'}
                        </td>
                        <td>
                              {piloto.surname ? piloto.surname : 'No hay ningún piloto con ese apellido'},{piloto.forename ? piloto.forename : 'No hay ningún piloto con ese nombre'}
                        </td>

                        <td>
                            {piloto.url ? piloto.url : 'No hay ningún piloto con esa URL'}
                        </td>
                    </tr>
                ))
            )}
        </table>
    );
};

export default ListadoCorredores;
