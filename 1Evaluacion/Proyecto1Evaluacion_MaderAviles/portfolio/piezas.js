document.addEventListener("DOMContentLoaded", () => {
    // Cargar piezas guardadas al cargar la página
    cargarPiezasGuardadas();
});
const submenuBtns = document.querySelectorAll('.submenu-btn');
submenuBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const submenu = btn.nextElementSibling;
        if (submenu) {
            submenu.classList.toggle('open');
        }
    });
});
// Función para añadir una nueva pieza
function addPieza() {
    let numeroPieza = prompt("Número de pieza:");
    let largo = prompt("Largo (cm):");
    let ancho = prompt("Ancho (cm):");
    let grosor = prompt("Grosor (cm):");
    let color = prompt("Color:");
    let superficie = prompt("Superficie:");
    let volumen = calcularVolumen(largo, ancho, grosor);

    if (numeroPieza && largo && ancho && grosor && color && superficie) {
        // Crear un objeto con los datos de la pieza
        let nuevaPieza = {
            numeroPieza,
            largo,
            ancho,
            grosor,
            color,
            superficie,
            volumen
        };

        // Guardar la pieza en localStorage
        guardarPieza(nuevaPieza);

        // Agregar la pieza a la tabla visual
        agregarPiezaATabla(nuevaPieza);
    } else {
        alert("Por favor, completa todos los campos.");
    }
}

// Función para agregar una pieza a la tabla
function agregarPiezaATabla(pieza) {
    let tabla = document.getElementById("bodyPiezas");
    let nuevaFila = tabla.insertRow(-1);

    nuevaFila.innerHTML = `
        <td>${pieza.numeroPieza}</td>
        <td>${pieza.largo}</td>
        <td>${pieza.ancho}</td>
        <td>${pieza.grosor}</td>
        <td>${pieza.color}</td>
        <td>${pieza.superficie}</td>
        <td>${pieza.volumen}</td>
    `;
}

// Función para calcular el volumen de la pieza
function calcularVolumen(largo, ancho, grosor) {
    return (parseFloat(largo) * parseFloat(ancho) * parseFloat(grosor) / 1000000).toFixed(4);
}

// Función para guardar una pieza en localStorage
function guardarPieza(pieza) {
    let piezas = JSON.parse(localStorage.getItem("piezas")) || [];
    piezas.push(pieza);
    localStorage.setItem("piezas", JSON.stringify(piezas));
}

// Función para cargar las piezas guardadas
function cargarPiezasGuardadas() {
    let piezas = JSON.parse(localStorage.getItem("piezas")) || [];
    piezas.forEach(pieza => agregarPiezaATabla(pieza));
}

// Función para eliminar una pieza por número de pieza
function eliminarPieza() {
    let numeroPieza = prompt("Introduce el número de la pieza a eliminar:");
    if (!numeroPieza) {
        alert("Número de pieza no válido.");
        return;
    }

    let piezas = JSON.parse(localStorage.getItem("piezas")) || [];
    let nuevasPiezas = piezas.filter(pieza => pieza.numeroPieza !== numeroPieza);

    if (piezas.length === nuevasPiezas.length) {
        alert("No se encontró la pieza con ese número.");
        return;
    }

    // Actualizar localStorage
    localStorage.setItem("piezas", JSON.stringify(nuevasPiezas));

    // Recargar la tabla
    document.getElementById("bodyPiezas").innerHTML = "";
    cargarPiezasGuardadas();
}

function seleccionarPieza() {
    let numeroPieza = prompt("Introduce el número de la pieza a seleccionar:");
    if (!numeroPieza) {
        alert("Número de pieza no válido.");
        return;
    }

    /*let piezas = JSON.parse(localStorage.getItem("piezas")) || [];*/
    let nuevasPiezas = piezas.filter(pieza => pieza.numeroPieza !== numeroPieza);

    if (piezas.length === nuevasPiezas.length) {
        alert("No se encontró la pieza con ese número.");
        return;
    }

    // Actualizar localStorage
    localStorage.setItem("piezas", JSON.stringify(nuevasPiezas));

    // Recargar la tabla
    document.getElementById("bodyPiezas").innerHTML = "";
    cargarPiezasGuardadas();
}

function modificarPieza() {
    let numeropedido = prompt("Introduce el número del pedido para modificar:");
    if (!numeropedido) {
        alert("Número de pedido no válido.");
        return;
    }

    let valor = prompt("¿Qué valor quieres cambiar del pedido?").toLowerCase();
    let nuevoValor;

    switch (valor) {
        case "número":
        case "numero":
            nuevoValor = prompt("Nuevo número del pedido:");
            break;
        case "largo":
            nuevoValor = prompt("Nueva longitud del pedido:");
            break;
        case "ancho":
            nuevoValor = prompt("Nueva anchura del pedido:");
            break;
        case "grosor":
            nuevoValor = prompt("Nuevo grosor del pedido:");
            break;
        case "color":
            nuevoValor = prompt("Nuevo color del pedido:");
            break;
        case "superficie":
            nuevoValor = prompt("Nueva superficie del pedido:");
            break;
        default:
            alert("Valor no reconocido.");
            return;
    }

    let pedidoEncontrado = pedidos.find(pedido => pedido.numeropedido === numeropedido);

    if (!pedidoEncontrado) {
        alert("No se encontró el pedido con ese número.");
        return;
    }

    // Actualizar el valor del pedido seleccionado
    pedidoEncontrado[valor] = nuevoValor;
    alert("Pedido actualizado correctamente.");
}