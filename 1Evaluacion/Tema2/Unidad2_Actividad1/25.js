/*Escribir un algoritmo que permita jugar a doble o nada: El jugador apuesta una cantidad y tira una
moneda (aleatoriamente). Si sale cara obtiene el doble de la cantidad apostada. Si sale cruz lo pierde
todo. */
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
