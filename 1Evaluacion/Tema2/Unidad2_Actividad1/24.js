/*Identificar cuantos días tiene el mes.. */
function alerta() {
// Array que contiene el número de días por mes
const diasPorMes = {
    enero: 31,
    febrero: 28, // 29 en años bisiestos
    marzo: 31,
    abril: 30,
    mayo: 31,
    junio: 30,
    julio: 31,
    agosto: 31,
    septiembre: 30,
    octubre: 31,
    noviembre: 30,
    diciembre: 31
};

// Función para obtener el número de días de un mes
function obtenerDiasDelMes(mes) {
    mes = mes.toLowerCase(); // Convertir a minúsculas para evitar problemas de coincidencia
    if (diasPorMes[mes] !== undefined) {
        document.write(`${mes.charAt(0).toUpperCase() + mes.slice(1)} tiene ${diasPorMes[mes]} dias.`);
    } else {
        document.write("Mes no valido. Por favor, ingresa un mes correcto.");
    }
}

// Ejemplo de uso
const mesSolicitado = prompt("De que mes deseas saber cuantos dias tiene?");
obtenerDiasDelMes(mesSolicitado);

}
