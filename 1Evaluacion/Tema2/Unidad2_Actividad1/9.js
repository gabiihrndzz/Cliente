/*Teniendo la variable primer_saludo = “hola”
Y la variable segundo_saludo = primer_saludo
Si ahora, le asignásemos un nuevo valor a primer_saludo =”hello”
¿Qué valor tendría segundo_saludo? */
function alerta(){
    let nombre, apellido, poblacion; 
    primer_saludo = "hola";
    segundo_saludo = primer_saludo;
    primer_saludo= "hello";
        //el resultado de segundo saludo seria hola y el de primero seria hello, por el orden en el que estan escritos
    document.write(primer_saludo+'<br>');
    document.write(segundo_saludo+'<br>');
    
}
