function testunidad2()
{
    var cadena="abc";
    console.log (typeof "abc");
    document.write(typeof cadena + "<br>");
    document.write(cadena + "<br>");

    var cadena2=String ("abc");
    var cadena3 = new String ("abc");
    document.write("<b>"+ typeof cadena+"</b>");
    document.write("<br>");
    document.write(typeof cadena2 + "<br>");
    document.write(typeof cadena3 + "<br>");
    let longitud=10;
    longitud="10";
    document.write (typeof longitud);
    if (cadena =="abc"){
        var x =10;
    }
    document.write("<br>");
    document.write(x);
    document.write("<br>");
    //document.write(y);
        //Uncaught ReferenceError: y is not defined
/*    let extLet=1;
    let extVar=1;
    if(true){
        let intLet=10;
        let intVar=10;    
    console.log("Dentro del bloque");
    console.log("extLet: ",extLet)
    console.log("extVar: ",extVar)
    console.log("intVar: ",intVar)
    console.log("intLet: ",intLet)
}
    console.log("Fuera del bloque");
    console.log("extLet: ",extLet)
    console.log("extVar: ",extVar)
    console.log("intVar: ",intVar)
        //Uncaught ReferenceError: intVar is not defined
    console.log("intLet: ",intLet)*/
    let animal ="Aguila";
    let numPatas=2;
    document.write(animal +numPatas);
    document.write("<br>");
    document.write(numPatas + numPatas+ animal);
    document.write("<br>");
    document.write(animal + numPatas +numPatas);
    document.write("<br>");
    document.write(animal + (numPatas +numPatas));
    let numColas = "1";
    document.write("<br>");
    console.log(numPatas+numColas);
    document.write(numPatas + numColas);
    //pequeño tip: si se ponen los paréntesis ent<re los dos números iguales, hacen la operación, sino, según como esten puestos puede que se hagan las operaciones o pueden que se unan sin hacer las operaciones
    cadena = "3.1415926"; 
    let nombre =  "42";
    let nom = "joan";
    let aprobado = true;
    
    document.write("<br>");
    document.write(Boolean(cadena));
    //true porque no esta vacio
    
    document.write("<br>");
    document.write(Boolean(0));
    //0=false /Distinto 0 = true
    
    document.write("<br>");
    document.write(Boolean(""));
    //cadena vacia= false
    
    document.write("<br>");
    document.write(Boolean(null));
    //null = false
    
    document.write("<br>");
    document.write(Boolean(undefined));
    //undefined = false;
    
    document.write("<br>");
    document.write(String (nombre) + nombre);
    document.write("<br>");
    document.write(String (nombre));


    document.write("<br>");
    document.write(Number(nom));
    //NaN

    document.write("<br>");
    document.write(Number(cadena) * 2);
    //6.2831852

    document.write("<br>");
    document.write(Number (aprobado));
    //1

    document.write("<br>");
    document.write(parseInt(cadena));
    //3 Pero NO redondea --> 3.9 ==3
    
    document.write("<br>");
    document.write(parseFloat(cadena));
    //3.1415926

let z =34;
z="ahora es una cadena";
z=true;
z=undefined;

}