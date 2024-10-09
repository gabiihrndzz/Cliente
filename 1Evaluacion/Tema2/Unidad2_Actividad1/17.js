/*Realiza un ejercicio que haga lo siguiente:
1. Se teclearán dos números enteros por pantalla hasta que los dos sean menores que 50.
2. El más pequeño se irá incrementando de 5 en 5 y el más grande se decrementará de 2 en 2, se
irán imprimiendo a la vez que se van generando. El programa terminará cuando los valores
se crucen */
function alerta() {
    let num1 = prompt('Introduce un número menor de 50');
    let num2 = prompt('Introduce otro número entero menor de 50');
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    let cruzado = false;

    // Asegurarse de que ambos números sean menores de 50
    while (num1 >= 50 || num2 >= 50) {
        num1 = prompt('Incorrecto, introduce un número menor de 50');
        num2 = prompt('Introduce otro número entero menor de 50');
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
    }

    do {
        // Imprimir los números actuales
        document.write(num1 + ' / Primero<br>');
        document.write(num2 + ' / Segundo<br>');

        // Incrementar y decrementar según sea necesario
        if (num1 < num2) {
            num1 += 5;
            num2 -= 2;
        } else if (num1 > num2) {
            num1 -= 2;
            num2 += 5;
        }

        // Verificar si son iguales
        if (num1 === num2) {
            document.write('Son iguales el primer número y el segundo: ' + num1 + '<br>');
            break; // Termina el bucle
        }

    } while (num1 < num2); // Continúa hasta que se crucen

    document.write('Fin del programa.');
}
