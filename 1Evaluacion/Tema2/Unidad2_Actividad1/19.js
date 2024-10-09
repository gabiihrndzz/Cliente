/*Elaborar un algoritmo que permita convertir de grados Fahrenheit a Centígrados, utilizando la
siguiente fórmula: C = 5 / 9 (F – 32). Mostrar los grados Centígrados y los Fahrenheit obtenidos */
function alerta() {
    let C, F;
    F = prompt('Introduzca los grados en Fahrenheit para pasarlo a celsius ');
    C = (5/ 9*(F-32));
    document.write('Son '+C+ ' grados celsius');

}
