/*Realiza un ejercicio en el que se le pida al usuario un valor numérico y mediante un bucle while
haga una cuenta atrás mostrándola mediante una ventana. */
function alerta(){
let valor;
    valor=prompt('Introduczca un numero para hacer la cuenta atras: ');

do{
    document.write(valor + ' <br>');
    valor=valor-1;
}while (valor> 0);
    
}
