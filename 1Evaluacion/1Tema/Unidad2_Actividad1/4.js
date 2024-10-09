/*Haz un programa que nos pregunte nuestro nombre, nuestra edad. El programa nos tiene que dar
como resultado los días que hemos vivido hasta el momento (suponiendo años de 365 días). */
function alerta(){
    let nombre, edad, dias;
    nombre=prompt('Introduce tu nombre: ');
    edad=prompt('Introduce tu edad: ');
    dias= edad* 365;
    alert(nombre+', de '+edad +' años, ha vivido un total de '+ dias +' dias');
}
