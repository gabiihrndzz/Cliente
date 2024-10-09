/*Leer tres números y escribirlos en orden decreciente. */
function alerta() {
    let num1=prompt('Introduzca el primer numero:');
    num1=parseFloat(num1);
    let num2=prompt('Introduzca el segundo numero:');
    num2=parseFloat(num2);
    let num3=prompt('Introduzca el tercer y ultimo numero:');
    num3=parseFloat(num3);

    let mayor = Math.max(num1, num2, num3);
    let menor = Math.min(num1, num2, num3);
    
    // Calcular el número medio
    let medio;
    if ((num1 > num2 && num1 < num3) || (num1 < num2 && num1 > num3)) {
        medio = num1;
    } else if ((num2 > num1 && num2 < num3) || (num2 < num1 && num2 > num3)) {
        medio = num2;
    } else {
        medio = num3;
    }
    
    // Mostrar los resultados
    document.write('Mayor: ' + mayor + ' | Medio: ' + medio + ' | Menor: ' + menor);
}    