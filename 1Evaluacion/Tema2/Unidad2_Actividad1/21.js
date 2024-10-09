/*Supongamos que nos preguntan qué porcentaje de hombres y qué porcentaje de mujeres hay un
salón de clases. Lo primero que tenemos que hacer es preguntar el total de personas que hay,
luego hacer un ciclo que en cada iteración pregunte el sexo de cada alumno. En base a esos datos se
calculan los porcentajes. */
function alerta() {
    let total = prompt('1- Salir || 2- Sumatorio  || 3- Factorial');
    
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
