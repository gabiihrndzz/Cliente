/*Escribir un programa que pida por teclado cuánto costó una cena, y escriba por teclado lo siguiente:
1. La propina más pequeña vale: propinapeq
2. La propina más grande vale: propinagra
3. Donde propinapeq es un 15% del valor de la cena
4. Donde propinagra es un 25% del valor de la cena. */
function alerta(){
    let cena, propinagra, propinapeq; 
    cena=prompt('Cuanto costo la cena: ');
    cena=parseFloat(cena);
    propinapeq=(15/100)*cena;
    propinagra=(25/100)*cena;

    document.write('======================= <br>');
    document.write('La propina pequeña son: '+ propinapeq+ 'euros<br>');
    document.write('La propina mas grande son:  '+propinagra + 'euros<br>');
    document.write('=======================');

}
