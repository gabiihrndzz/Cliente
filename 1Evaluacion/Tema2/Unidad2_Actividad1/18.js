/*Crear un programa que escriba dos columnas de números, en la primera se colocan los números del
1 al 100, en la segunda los números del 100 al 1, mediante un solo bucle */
function alerta() {
    for(let i=0, j=100; i<100;i++, j--){
        document.write(i+' || '+j+'<br>');
    }

}
