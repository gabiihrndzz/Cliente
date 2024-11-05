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


        function factorial (n){
            //Devuelve n!
            
        }


    function testUnidad3(){
        let miObjeto= new Object();
        miObjeto.name= "Gabriel";
        miObjeto.disparos=4;
        document.write('<br>', miObjeto['name']);
            miObjeto.disparar =function() {
                this.disparos --;
                alert(this.name +" ha disparado. Le quedan "+ this.disparos + ' disparos');
            }

            miObjeto.disparar();
    }

    function persona(){
    let Persona = function (nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    let persona2 = new Persona ('Diego', '40');
    document.write(persona2.nombre+ " de "+persona2.edad + " años");
}


function json(){
    let miobjeto = {
        name : "Invasor del espacio #1",
        color : "Azul",
        x : 100,
        y : 20,
        disparos : 30,
        disparar : function(){
        this.disparos--;
        alert(this.name + "ha disparado");
        }
        };
        miObjeto.disparar();
}


    class marcianito{
        constructor (nombre, color){
            this.nombre = nombre;
            this.color = color;
        }
    }
    class saludador{
        static nombreConexion = "conexion";
        static palabraSaludo = "Hola";
        nombre = "Desconocido";
        constructor (nombre){
            this.nombre = nombre ||this.nombre; 
        }
        saludo(){
            return `${saludador.palabraSaludo}, soy ${this.nombre}`;
        }
    }

    class Tools {
        static strToURL(str) {
        return encodeURIComponent(str).replace(/%20/g, "+");
        }
        }
        
        class Rectangulo {
            constructor(altura = 0, ancho = 0) {
            this._altura = altura;
            this._ancho = ancho;
            this.var2 = 12;
            let _var1;}
            get var1(){
                return this._var1;
            }
            set var1 (valor){
                this._var1= valor;
            }
        }
            
        function test4Unidad3(){
       /* let salud1 = new saludador('OuSi');
        let ET = new marcianito('Rocky','Blanco');
        document.write(salud1.saludo());
        salud1.nuevaPropiedad = "Tengo una nueva propiedad, soy como un superalimento<br>";
        document.write('<br>',salud1.nuevaPropiedad);
        let marcianito1 = new marcianito("ALF", "Marron");
        if(marcianito1.constructor == marcianito){
            document.write('El tipo Correcto es Marcianito');
        }
        else{
            document.write("No lo es");
        }
        document.write('<br>');
        Tools.strToURL("La donna e mobile"); // "La+donna+e+mobile"
        let toolkit = new Tools();
        toolkit.strToURL("La donna e mobile"); //ERROR. El Método no existe*/
        let r = new Rectangulo(10, 20);
        r._var1 =25;
            document.write('<br>',r._var1);
    }    




    function test5Unidad3(){
        Array.prototype.average = function (){
            let iTotal=0;
            for(let i=0;i<this.length; i++)
                iTotal+=this[i];
                return iTotal/this.length;
        }
        let prueba = new Array(3,4,12,17);
        document.write( "El resultado del average del array da: "+ prueba.average());
    }

    function move (direccion){

        if (Array.prototype.average == undefined ){
            document.write("Array prototype average == undefined<br>");
        };
    }
    function test6Unidad3() {
        const usuario = {
            nombre: 'Juan Diego',
            apellido: 'Bueno',
            cursos: ['Cliente', 'Interfaces', 'Puesta del sol'],
        };
    
        const getNombreCompleto = ({ nombre, apellido }) => `${nombre} ${apellido}`;
        const {nombre, apellido} = usuario;
        
        console.log (nombre);
        const{nombre: nuevoNombre}=usuario;
        
        console.log("Nuevo Nombre: " + nuevoNombre);
        console.log("getNombreCompleto", getNombreCompleto(usuario));
        
        const nuevoUsuario ={
            ...usuario,
            apellido: 'Botto'
        };
        
        console.log(nuevoUsuario.nombre);
        console.log("getNombreCompleto", getNombreCompleto(nuevoUsuario));
        const [primerCurso, ...otrosCursos] =nuevoUsuario.cursos;
        
        console.log(primerCurso);
        console.log(otrosCursos);

        const nuevoObjeto = {nuevoNombre, primerCurso};
        console.log("nuevoObjeto: ", nuevoObjeto);
        const suma = (...numeros) => numeros.reduce 
        // Llamada con nombre y apellido
        console.log("getNombreCompleto:", getNombreCompleto({ nombre: 'Yolanda', apellido: 'Iglesias' }));
    
        // Llamada con el objeto usuario
        console.log("getNombreCompleto:", getNombreCompleto(usuario));
    }
    
    class VentaRegularStrategy {
        constructor(impuesto) {
            this.impuesto = impuesto;
        }
        Calcular(importe) {
            return importe + (importe * this.impuesto);
        }
    }
    
    class VentaConDescuentoStrategy {
        constructor(impuesto, descuento) {
            this.impuesto = impuesto;
            this.descuento = descuento;
        }
    
        Calcular(importe) {
            return (importe + (importe * this.impuesto)) - this.descuento;
        }
    }
    
    class VentaClient {
        constructor(strategy) {
            this.strategy = strategy;
        }
    
        SetStrategy(strategy) {
            this.strategy = strategy;
        }
    
        Calcular(importe) {
            return this.strategy.Calcular(importe);
        }
    }
    
    function test9Unidad3() {
        const ventaRegularStrategy = new VentaRegularStrategy(0.21);
        const venta = new VentaClient(ventaRegularStrategy);
        
        document.write("Venta Regular: " + venta.Calcular(100) + "<br>");
    
        const ventaConDescuentoStrategy = new VentaConDescuentoStrategy(0.21, 10);
        venta.SetStrategy(ventaConDescuentoStrategy);
        
        document.write("Venta con Descuento: " + venta.Calcular(100));
    }
    