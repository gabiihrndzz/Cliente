/*Crear un programa que muestre un menú como este:
Salir
Sumatorio
Factorial
Tras mostrar el menú, el programa debe leer un número del 1 al tres si se elige 1, el programa acaba.
Si se elige 2 se calcula el sumatorio del número, si se elige 3 se calcula el factorial (en ambos casos el
programa pedirá escribir el número sobre el que se calcula el sumatorio o el factorial). Tras calcular
el sumatorio o el factorial e indicar el resultado, el programa volverá a mostrar el menú y así
sucesivamente */
function alerta() {
    let total=1;
    let opcion = prompt('1- Salir || 2- Sumatorio  || 3- Factorial');
    
    if(opcion==1){
        document.write('Fin del programa');
    }
    else if(opcion==2){
        let num2 = prompt('Introduzca el numero para hacer el sumatorio.');
        for(let i=0; i<=num2; i++){
            total=total+i;
            document.write(i+'||');
        }
        total=total-1;
        document.write("El sumatorio de "+ num2+ ", da "+total);

    }
    else if(opcion==3){
        let num2 = prompt('Introduzca el numero para hacer el factorial');
        
        for(let i=1; i<=num2; i++){
            total=total*i;
            document.write(i+'||');
        }
        document.write("El factorial de "+ num2+ ", da "+total);

    }
    else{
        document.write('Opcion incorrecta');}
    
}
