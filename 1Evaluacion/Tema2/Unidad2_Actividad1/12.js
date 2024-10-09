/*Crear un programa que lea un número entero y a partir de él cree un cuadrado de asteriscos con ese
tamaño. */
function alerta(){
let valor;
    valor=prompt('Introduczca un numero entero: ');
for(let f=0; f<valor; f++){
    document.write("*");
    for(let i = 0 ; i<valor; i++){
        document.write('*');
    }
document.write('<br>');
}

}
