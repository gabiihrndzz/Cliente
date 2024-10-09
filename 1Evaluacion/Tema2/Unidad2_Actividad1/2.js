/*Haz un programa que sirva para dividir dos números. ¿Qué sucede si en lugar de dividir dos
números, intentamos dividir dos textos? ¿Qué sucede si el divisor es el número 0? ¿Y si no
introducimos nada? */
function alerta(){
    let num1, num2, resul;
    num1=prompt('Introduce el primer número: ');
    num2=prompt('Introduce el segundo número: ');
    resul=num1/num2;
    alert('El resultado da: ' + resul);
}

function alerta2 (){

}

//1 --> Numeros == correcto // textos == NaN // entre 0 == infinity // nada == NaN