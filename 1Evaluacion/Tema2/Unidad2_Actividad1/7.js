/*Haz un programa para calcular la longitud de una circunferencia y el área del círculo
correspondiente. */
function alerta(){
    let radio;
    pi= 3.14159;
    r=prompt('Introduzca el radio en metros: ');
    circunferencia= 2*pi*r;
    area= pi*r*r;
    document.write('La circunferencia tiene una longitud de '+ circunferencia+ ' metros, y el area del circulo tiene un area de: '+ area);
}
