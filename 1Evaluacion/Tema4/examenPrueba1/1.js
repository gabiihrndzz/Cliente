// Clase Persona: Representa a una persona con nombre, peso y altura
class Persona {
    constructor(nombre, peso, altura) {
        this.nombre = nombre; 
        this.peso = peso;     
        this.altura = altura; 
    }

    // Método para calcular el IMC
    calcularIMC() {
        return this.peso / (this.altura ** 2);
    }

    // Método para determinar el estado basado en el IMC
    obtenerEstado() {
        const imc = this.calcularIMC();
        if (imc < 18.49) {
            return "Demasiado delgada";
        } else if (imc >= 18.49 && imc <= 24.99) {
            return "Peso normal";
        } else {
            return "Demasiado obesa";
        }
    }
}

// Clase SistemaIMC: Maneja el sistema de personas y cálculos de IMC
class SistemaIMC {
    constructor() {
        this.personas = []; // Lista de todas las personas
        this.personasPesoNormal = []; // Lista de personas con peso normal
        this.personasFueraRango = []; // Lista de personas fuera del peso normal
    }

    // Añadir una nueva persona
    agregarPersona(nombre, peso, altura) {
        const persona = new Persona(nombre, peso, altura);
        this.personas.push(persona); // Se agrega la persona al array de todas las personas
        // Ahora se clasifica la persona en el grupo correspondiente
        this.clasificarPersona(persona);
        return `${nombre} ha sido añadido correctamente.`;
    }

    // Clasificar a la persona según su IMC
    clasificarPersona(persona) {
        const estado = persona.obtenerEstado(); // Obtener el estado de la persona
        if (estado === "Peso normal") {
            this.personasPesoNormal.push(persona); // Si es peso normal, se añade al grupo de peso normal
        } else {
            this.personasFueraRango.push(persona); // Si está fuera de rango, se añade a otro grupo
        }
    }

    // Modificar los datos de una persona existente
    modificarPersona(nombre, nuevoPeso, nuevaAltura) {
        const persona = this.personas.find(p => p.nombre === nombre); // Buscar persona por nombre
        if (persona) {
            persona.peso = nuevoPeso;   // Actualizar peso
            persona.altura = nuevaAltura; // Actualizar altura
            // Después de modificar los datos, volvemos a clasificar la persona
            this.clasificarPersona(persona);
            return `${nombre} ha sido modificado correctamente.`;
        } else {
            return `No se encontró a ${nombre}.`;
        }
    }

    // Calcular y mostrar el IMC de todas las personas
    calcularIMC() {
        const resultadosDiv = document.getElementById("resultados");
        resultadosDiv.innerHTML = "<h3>Resultados del IMC:</h3>";
        // Mostrar solo personas con peso normal
        this.personasPesoNormal.forEach(persona => {
            const imc = persona.calcularIMC().toFixed(2); // Calcular IMC con dos decimales
            const estado = persona.obtenerEstado(); // Obtener el estado
            resultadosDiv.innerHTML += `<p>${persona.nombre}: IMC=${imc} (${estado})</p>`;
        });
    }

    // Mostrar personas fuera del rango de peso normal
    mostrarResultadosFueraDeRango() {
        const fueraRangoDiv = document.getElementById("fuera-rango");
        fueraRangoDiv.innerHTML = "<h3>Personas fuera del peso normal:</h3>";
        // Mostrar solo personas fuera del peso normal
        this.personasFueraRango.forEach(persona => {
            const imc = persona.calcularIMC().toFixed(2); // Calcular IMC con dos decimales
            fueraRangoDiv.innerHTML += `<p>${persona.nombre}: IMC=${imc}</p>`;
        });
    }
}


// Crear una instancia del sistema
const sistema = new SistemaIMC();

// Manejar el formulario para añadir personas
document.getElementById("form-agregar").addEventListener("submit", function (e) {
    e.preventDefault(); // Evitar que la página recargue
    const nombre = document.getElementById("nombre").value;
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    const mensaje = sistema.agregarPersona(nombre, peso, altura); // Añadir persona y obtener mensaje
    document.getElementById("mensaje-agregar").textContent = mensaje; // Mostrar mensaje de éxito

    e.target.reset(); // Limpiar el formulario
});

// Manejar el formulario para modificar personas
document.getElementById("form-modificar").addEventListener("submit", function (e) {
    e.preventDefault(); // Evitar recargar la página
    const nombre = document.getElementById("mod-nombre").value;
    const peso = parseFloat(document.getElementById("mod-peso").value);
    const altura = parseFloat(document.getElementById("mod-altura").value);

    const mensaje = sistema.modificarPersona(nombre, peso, altura); // Modificar y obtener mensaje
    document.getElementById("mensaje-modificar").textContent = mensaje; // Mostrar mensaje

    e.target.reset(); // Limpiar el formulario
});

// Botón para calcular y mostrar resultados del IMC
document.getElementById("btn-calcular").addEventListener("click", function () {
    sistema.calcularIMC(); // Mostrar resultados del IMC
    sistema.mostrarResultadosFueraDeRango(); // Mostrar personas fuera del rango
});
