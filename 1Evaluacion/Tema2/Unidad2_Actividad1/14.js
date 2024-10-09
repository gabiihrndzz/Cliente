/*Hacer un programa que pida un número, luego pide a tu compañero que intente adivinarlo. Tienes
5 oportunidades. Utiliza la sentencia break para salir del bucle si lo adivina antes. */
function alerta() {
    let incognita = prompt('Introduce un numero para ser adivinado del 1 al 20: ');
    incognita = parseFloat(incognita);
    let adivinado = false;
    let intentos = 0;

    do  {
        let intento = prompt('Introduce un numero para adivinar del 1 al 20: ');
        intento = parseFloat(intento);
        intentos++;

        if (intento === incognita) {
            document.write('Genial, has adivinado!<br>');
            adivinado = true;
            break; // Salir del bucle si adivina
        } else {
            document.write('Intenta de nuevo. Te quedan ' + (5 - intentos) + ' intentos.<br>');
        }
    }while(intentos < 5);

    if (!adivinado) {
        document.write('Lo siento, no has adivinado el numero. El numero era ' + incognita + '.<br>');
    }

    document.write('Fin del programa.');
}
