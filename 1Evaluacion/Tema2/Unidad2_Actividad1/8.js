/*Haz un programa que funcione de la manera siguiente:
• Nos pida nuestro nombre.
• Nos pida nuestro primer apellido.
• Nos pida en que población vivimos.
• Al final nos presente:
=======================
Hola “nombre y apellido”
Adiós habitante de “Población”
======================. */
function alerta(){
    let nombre, apellido, poblacion; 
    nombre=prompt('Introduzca su nombre: ');
    apellido=prompt('Introduzca su primer apellido: ');
    poblacion=prompt('Introduzca la poblacion en la que vive: ');

    document.write('======================= <br>');
    document.write('Hola '+ nombre+ ' ' + apellido+ '<br>');
    document.write('Adios habitante de '+poblacion + '<br>');
    document.write('=======================');

}
