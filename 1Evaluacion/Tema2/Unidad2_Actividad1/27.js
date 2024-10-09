/*Leer 3 números (día, mes y año) y decir si corresponde a una fecha correcta. Un año es bisiesto si es
divisible por 4 excepto si acaba en 00 en cuyo caso es bisiesto sólo si es divisible por 400. */

function alerta() {
    let dias=prompt('Introduzca dia:');
    dias=parseFloat(dias);
    let mes=prompt('Introduzca mes:');
    mes=parseFloat(mes);
    let ano=prompt('Introduzca ano:');
    ano=parseFloat(ano);
    if(dias<=31 && mes<=12 && ano<=2024)
    document.write('El dia ',dias, ' de ', mes, ' del ano ', ano);
    else
    document.write('error en la fecha');
}
