/*Calcula cuantos números pares hay entre dos introducidos. */
function alerta() {
    num1=prompt('Dime un numero:');
    num2=prompt('Dime otro numero:');
    num1=parseFloat(num1);
    num2=parseFloat(num2);
    let i=0; 
    if (num1>num2){
        i=num1
        for(let i = num2 ; i<=num1;i=i+2){
            document.write(i,' <br>');
        }
    }
    else if (num2>num1){
        i=num2
        for(let i = num1 ; i<=num2;i=i+2){
            document.write(i,' <br>');
        }
    }
    else{
        document.write('Son iguales');
    }

}
