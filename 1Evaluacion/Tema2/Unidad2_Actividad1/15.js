/*Hacer un programa utilizando la sentencia switch para que dada una nota numérica nos dé la nota
en letra. (Por ejemplo, nota= 5 → Aprobado).. */
function alerta() {
    let valor = prompt('Introduce un numero del 1-10 ver la nota : ');
    valor= parseFloat(valor); 
    switch (valor){
        case 1:
            document.write('suspenso');
        break;
        case 2:
           document.write('suspenso');
        break;
        case 3:
            document.write('suspenso');
        break;
        case 4:
            document.write('suspenso');
        break;
        case 5:
            document.write('aprobado');
        break;
        case 6:
            document.write('bien');

        break;
        case 7:
            document.write('notable bajo');

        break;
        case 8:
            document.write('notable alto');

        break;
        case 9:
            document.write('sobresaliente');

        break;
        case 10:
            document.write('10, sobresaliente');

        break;
    }

}
