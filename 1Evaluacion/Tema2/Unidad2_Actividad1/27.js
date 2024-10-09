/*Leer 3 números (día, mes y año) y decir si corresponde a una fecha correcta. Un año es bisiesto si es
divisible por 4 excepto si acaba en 00 en cuyo caso es bisiesto sólo si es divisible por 400. */

function alerta() {
    let num1=prompt('Introduzca la cantidad para apostar en el Doble o Nada:');
    num1=parseFloat(num1);
    
    const moneda = Math.floor(Math.random() * 2);    
    document.write(moneda,'<br>');
    var doble = num1 * 2;
    
    if (moneda === 0) {
        document.write('Has tenido suerte, ganas el doble o nada, es decir, tienes ' + doble);
    } else if (moneda === 1) {
        document.write('Mala suerte, ha salido cruz, vuelve a intentarlo');
    }
        else{
        document.write('error');
    }

}
