function comparerCadenaLongitud (f1,f2) {
    if(f1.length>f2.length){
        return 1;
    }
    else if (f1.length<f2.length){
        return 1 ;
    }
    else return 0 ;
        }
        
    function testUnidad3 (){
    numArray = new Array(0,1,2,3,4,5,6);
    alert(numArray.length);
    let coches = new Array();
    coches [0]="Porsche";
    coches [1]="Nissan";
    let colores = ['Rojo','Azul','Verde'];
    coches [2]="Seat";
    //alert(coches.length);


    let a = ['Lunes','Martes',3,4,5,6, " Domingo"]
   /* console.log(a[0]);
    console.log(a[4]);
    console.log(a[7]);
    console.log(a[6]);
    console.log(a[10]);*/
    document.write(a.join(' | '));
    let ejemplo = [0,1,2,3];
    let otraMatriz = ejemplo;
    otraMatriz[1]=4;
    document.write("<br>");
    document.write(ejemplo[1]);
    document.write("<br>");
    document.write(ejemplo.join(", "));
    document.write("<br>");
    document.write("<br>");
    document.write("<br>");
         
    const comparerCadenaLongitud = (f1,f2) =>{
        if(f1.length>f2.length){
            return 1;
        }
        else if (f1.length<f2.length){
            return -1 ;
        }
        else return 0 ;
            }
         
    let frutas = ["Naranjas", "Albaricoques", " Manzanas", "Peras"];
    frutas.sort(comparerCadenaLongitud);  
    
    let frutasReverse= frutas.slice().sort(comparerCadenaLongitud);
    document.write(frutasReverse.join(">"));

    

    document.write("<br>");
    document.write("<br>");
        var dimension1=["00","01","02"];
        var dimension2=["10","11","12"];

        var matriz2d= [dimension1, dimension2];
        alert (matriz2d[1][2]);

        dimension1.push("03");
        document.write(dimension1.join(', '));
        let x=dimension1.shift();
        document.write('<br',dimension1.join(', '));
    document.write("<br>");
    document.write("<br>", x);
            

        }