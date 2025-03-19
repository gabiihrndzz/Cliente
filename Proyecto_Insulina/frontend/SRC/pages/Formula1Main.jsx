import React, { useState, useEffect } from 'react';

// Importamos los componentes necesarios
import ListadoCorredores from '../components/ListadoCorredores';
import FiltradoCorredores from '../components/FiltradoCorredores';
import MasJoven from '../components/MasJoven';

const F1Main = () => {
    // Estados para almacenar las pilotos, el filtro, las pilotos filtradas y errores
    const [pilotos, setPilotos] = useState([]);
    const [filtro, setFiltro] = useState('');
    const [pilotosFiltradas, setPilotosFiltradas] = useState([]);
    const [error, setError] = useState(null);

    // Efecto que carga las pilotos desde el JSON cuando el componente se monta
    useEffect(() => {
        const fetchPilotos = async () => {
            try {
                // Hacemos la petición al archivo JSON dentro de public/json
                const response = await fetch('/json/Formula1.json');
                
                // Si la respuesta no es correcta, lanzamos un error
                if (!response.ok) {
                    throw new Error(`Error al cargar los pilotos: ${response.status} ${response.statusText}`);
                }

                const data = await response.json();

                // Verificamos que el JSON es un array válido
                if (!Array.isArray(data)) {
                    throw new Error('El JSON de pilotos no es un array válido');
                }

                // Guardamos las pilotos en los estados correspondientes
                setPilotos(data);
                console.log('Pilotos cargadas:', data);
                setPilotosFiltradas(data);
            } catch (error) {
                console.error('Error al cargar las pilotos:', error);
                setError(error.message);
                setPilotos([]);
                setPilotosFiltradas([]);
            }
        };

        fetchPilotos();
    }, []);

    // Efecto que actualiza las pilotos filtradas cuando cambia el filtro o la lista de pilotos
    useEffect(() => {
        if (filtro.trim() !== '') {
            const pilotosFiltradas = pilotos.filter(
                piloto => 
                    piloto.nationality && 
                    typeof piloto.nationality === 'string' &&
                    piloto.nationality.toLowerCase().includes(filtro.toLowerCase())
            );
            setPilotosFiltradas(pilotosFiltradas);
        } else {
            setPilotosFiltradas(pilotos);
        }
    }, [filtro, pilotos]);

    return (
        <div>
            <h1>Formula 1 (uno)</h1>
            {/* Mostramos un mensaje de error si hay problemas con la carga de pilotos */}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            
            {/* Componente para filtrar pilotos */}
            <FiltradoCorredores setFiltro={setFiltro} />
            
            {/* Mostramos las pilotos filtradas o un mensaje si no hay pilotos disponibles */}
            {pilotosFiltradas.length > 0 ? (
                <ListadoCorredores pilotos={pilotosFiltradas} />
            ) : (
                <p>No hay pilotos disponibles.</p>
            )}

            {/* Mostramos la canción más popular solo si hay pilotos cargadas */}
            {pilotos.length > 0 && <MasJoven pilotos={pilotos} />}
        </div>
    );
};

export default F1Main;
