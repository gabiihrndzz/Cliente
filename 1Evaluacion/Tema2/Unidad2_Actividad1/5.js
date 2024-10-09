/*Haz un programa que nos pida un número, y nos muestre en una única pantalla, el doble, el triple
y el cuádruple del número que habíamos introducido (cada uno en una línea). */
function alerta(){
    let nombre, edad, dias;
    nombre=prompt('Introduce tu nombre: ');
    edad=prompt('Introduce tu edad: ');
    dias= edad* 365;
    alert(nombre+', de '+edad +' años, ha vivido un total de '+ dias +' dias');
}
