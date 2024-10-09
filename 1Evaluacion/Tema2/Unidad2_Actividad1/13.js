/*Realiza una aplicación que pida al usuario el precio de un producto sin el IVA y el IVA a aplicar,
calculando el precio total a pagar.. */
function alerta(){
let valor;
    valor=prompt('Introduczca el valor del producto: ');
    valor = parseFloat(valor);

var resultado=(valor+(valor*0.21));
    document.write('El valor del producto con IVA es de '+ resultado+' euros')
}
