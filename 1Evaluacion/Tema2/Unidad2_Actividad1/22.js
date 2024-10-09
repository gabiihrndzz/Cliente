/*Calcula la media de una serie de números introducidos por teclado. */
function alerta() {
num1=prompt('Dime un numero:');
num2=prompt('Dime otro numero:');
num3=prompt('Dime un tercer numero:');
num4=prompt('Dime un ultimo numero:');
num1=parseFloat(num1);
num2=parseFloat(num2);
num3=parseFloat(num3);
num4=parseFloat(num4);
    suma=(num1+num2+num3+num4);
    promedio=(suma/4);
    document.write('La media da: '+promedio);
    
}
