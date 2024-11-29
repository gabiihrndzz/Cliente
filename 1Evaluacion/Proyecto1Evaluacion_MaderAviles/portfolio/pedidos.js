document.addEventListener("DOMContentLoaded", () => {
    cargarpedidosGuardadas();
});
document.addEventListener("DOMContentLoaded", () => {
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
function addPieza() {
    let numeroPieza = prompt("Número de pieza:");
    if (!numeroPieza || !Number.isInteger(Number(numeroPieza)) || numeroPieza < 1) {
        alert("Número de pieza inválido. Debe ser un entero mayor o igual a 1.");
        return;
    }

    let piezas = JSON.parse(localStorage.getItem("piezas")) || [];
    if (piezas.some(pieza => pieza.numeroPieza === numeroPieza)) {
        alert("El número de pieza ya existe.");
        return;
    }

    let largo = parseFloat(prompt("Largo (cm):"));
    let ancho = parseFloat(prompt("Ancho (cm):"));
    let grosor = parseFloat(prompt("Grosor (cm):"));
    if (isNaN(largo) || largo <= 0 || isNaN(ancho) || ancho <= 0 || isNaN(grosor) || grosor <= 0) {
        alert("Las dimensiones deben ser números mayores que 0.");
        return;
    }

    let color = prompt("Color:");
    let superficie = prompt("Superficie:");
    let volumen = calcularVolumen(largo, ancho, grosor);

    let nuevaPieza = { numeroPieza, largo, ancho, grosor, color, superficie, volumen };
    guardarPieza(nuevaPieza);
    agregarPiezaATabla(nuevaPieza);
    alert("Pieza añadida correctamente.");
}

function agregarPiezaATabla(pieza) {
    let tabla = document.getElementById("bodyPiezas");
    let introducir = tabla.insertRow(-1);

    introducir.innerHTML = `
        <td>${pieza.numeroPieza}</td>
        <td>${pieza.largo}</td>
        <td>${pieza.ancho}</td>
        <td>${pieza.grosor}</td>
        <td>${pieza.color}</td>
        <td>${pieza.superficie}</td>
        <td>${pieza.volumen}</td>
    `;
}
//v = l x b x h
function calcularVolumen(largo, ancho, grosor) {
    return (parseFloat(largo * ancho * grosor) / 1000000);
}

function guardarPieza(pieza) {
    let piezas = JSON.parse(localStorage.getItem("piezas")) || [];
    piezas.push(pieza);
    localStorage.setItem("piezas", JSON.stringify(piezas));
}

function cargarPiezasGuardadas() {
    let piezas = JSON.parse(localStorage.getItem("piezas")) || [];
    piezas.forEach(pieza => agregarPiezaATabla(pieza));
}

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

    localStorage.setItem("piezas", JSON.stringify(nuevasPiezas));

    document.getElementById("bodyPiezas").innerHTML = "";
    cargarPiezasGuardadas();
}

function seleccionarPieza() {
    let numeroPieza = prompt("Introduce el número de la pieza a seleccionar:");
    if (!numeroPieza) {
        alert("Número de pieza no válido.");
        return;
    }

    let nuevasPiezas = piezas.filter(pieza => pieza.numeroPieza !== numeroPieza);

    if (piezas.length === nuevasPiezas.length) {
        alert("No se encontró la pieza con ese número.");
        return;
    }

    localStorage.setItem("piezas", JSON.stringify(nuevasPiezas));

    document.getElementById("bodyPiezas").innerHTML = "";
    cargarPiezasGuardadas();
}

function modificarPedido() {
    let numeroPedido = prompt("Introduce el número del pedido para modificar:");
    if (!numeroPedido) {
        alert("Número de pedido no válido.");
        return;
    }
function isValidDate(dateString) {
    const regEx = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateString.match(regEx)) return false;

    const date = new Date(dateString);  // Crea una fecha a partir del string
    const timestamp = date.getTime();  // Obtiene el timestamp (número de milisegundos)
    if (typeof timestamp !== 'number' || Number.isNaN(timestamp)) return false;  // Verifica si la fecha es válida

    // Compara la fecha ingresada con la fecha estándar
    return dateString === date.toISOString().split('T')[0];  // Devuelve true si la fecha es válida y en formato correcto
}

    // Leer pedidos de localStorage
    let pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];
    let pedidoEncontrado = pedidos.find(pedido => pedido.numeropedido === numeroPedido);

    if (!pedidoEncontrado) {
        alert("No se encontró el pedido con ese número.");
        return;
    }

    let valor = prompt("¿Qué valor quieres cambiar del pedido? (cliente, fecha, procesado, servido):").toLowerCase();
    let nuevoValor;

    if (valor === "fecha") {
        nuevoValor = prompt("Nueva fecha (YYYY-MM-DD):");

        // Validar fecha
        if (!isValidDate(nuevoValor)) {
            alert("Fecha no válida. El formato correcto es YYYY-MM-DD.");
            return;
        }

        // Validar que la fecha no sea posterior a la actual
        let fechaActual = new Date();
        let fechaPedido = new Date(nuevoValor);
        if (fechaPedido > fechaActual) {
            alert("La fecha no puede ser posterior al día de hoy.");
            return;
        }

        pedidoEncontrado.fecha = nuevoValor;
    } else if (["cliente", "procesado", "servido"].includes(valor)) {
        nuevoValor = prompt(`Nuevo valor para ${valor}:`);
        pedidoEncontrado[valor] = nuevoValor;
    } else {
        alert("Valor no reconocido.");
        return;
    }

    // Guardar la lista actualizada en localStorage
    localStorage.setItem("pedidos", JSON.stringify(pedidos));

    // Recargar la tabla
    document.getElementById("bodypedidos").innerHTML = "";
    cargarpedidosGuardadas();
    alert("Pedido modificado correctamente.");
}
// Función para añadir una nueva pedido
function addpedido() {
    let numeropedido = prompt("Número de pedido:");
    if (!numeropedido || !Number.isInteger(Number(numeropedido)) || numeropedido < 1) {
        alert("Número de pedido inválido. Debe ser un entero mayor o igual a 1.");
        return;
    }

    let pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];
    if (pedidos.some(pedido => pedido.numeropedido === numeropedido)) {
        alert("El número de pedido ya existe.");
        return;
    }

    let cliente = prompt("Cliente:");
    let fecha = prompt("Fecha (YYYY-MM-DD):");

    let procesado = prompt("Procesado (si/no):").toLowerCase();
    let servido = prompt("Servido (si/no):").toLowerCase();

    if (!["si", "no"].includes(procesado) || !["si", "no"].includes(servido)) {
        alert("Procesado y Servido deben ser 'si' o 'no'.");
        return;
    }

    let nuevapedido = { numeropedido, cliente, fecha, procesado, servido };
    guardarpedido(nuevapedido);
    agregarpedidoATabla(nuevapedido);
    alert("Pedido añadido correctamente.");
}


// Función para agregar una pedido a la tabla
function agregarpedidoATabla(pedido) {
    let tabla = document.getElementById("bodypedidos");
    let nuevaFila = tabla.insertRow(-1);

    nuevaFila.innerHTML = `
        <td>${pedido.numeropedido}</td>
        <td>${pedido.cliente}</td>
        <td>${pedido.fecha}</td>
        <td>${pedido.procesado}</td>
        <td>${pedido.servido}</td>
    `;
}

// Función para guardar una pedido en localStorage
function guardarpedido(pedido) {
    let pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];
    pedidos.push(pedido);
    localStorage.setItem("pedidos", JSON.stringify(pedidos));
}

// Función para cargar las pedidos guardadas
function cargarpedidosGuardadas() {
    let pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];
    pedidos.forEach(pedido => agregarpedidoATabla(pedido));
}

// Función para eliminar una pedido por número de pedido
function eliminarpedido() {
    let numeropedido = prompt("Introduce el número de la pedido a eliminar:");
    if (!numeropedido) {
        alert("Número de pedido no válido.");
        return;
    }

    let pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];
    let nuevaspedidos = pedidos.filter(pedido => pedido.numeropedido !== numeropedido);

    if (pedidos.length === nuevaspedidos.length) {
        alert("No se encontró la pedido con ese número.");
        return;
    }

    // Actualizar localStorage
    localStorage.setItem("pedidos", JSON.stringify(nuevaspedidos));

    // Recargar la tabla
    document.getElementById("bodypedidos").innerHTML = "";
    cargarpedidosGuardadas();
}

function seleccionarpedido() {
    let numeropedido = prompt("Introduce el número de la pedido a seleccionar:");
    if (!numeropedido) {
        alert("Número de pedido no válido.");
        return;
    }

    /*let pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];*/
    let nuevaspedidos = pedidos.filter(pedido => pedido.numeropedido !== numeropedido);

    if (pedidos.length === nuevaspedidos.length) {
        alert("No se encontró la pedido con ese número.");
        return;
    }

    // Actualizar localStorage
    localStorage.setItem("pedidos", JSON.stringify(nuevaspedidos));

    // Recargar la tabla
    document.getElementById("bodypedidos").innerHTML = "";
    cargarpedidosGuardadas();
}

function modificarPieza() {
    let numeroPieza = prompt("Introduce el número de la pieza para modificar:");
    if (!numeroPieza) {
        alert("Número de pieza no válido.");
        return;
    }
    

    // Leer piezas de localStorage
    let piezas = JSON.parse(localStorage.getItem("piezas")) || [];
    console.log("Piezas cargadas:", piezas); // Depuración

    let piezaEncontrada = piezas.find(pieza => pieza.numeroPieza === numeroPieza);
    console.log("Pieza encontrada:", piezaEncontrada); // Depuración

    if (!piezaEncontrada) {
        alert("No se encontró la pieza con ese número.");
        return;
    }

    let valor = prompt("¿Qué valor quieres cambiar de la pieza? (largo, ancho, grosor, color, superficie)").toLowerCase();
    let nuevoValor;

    switch (valor) {
        case "largo":
        case "ancho":
        case "grosor":
        case "color":
        case "superficie":
            nuevoValor = prompt(`Nuevo valor para ${valor}:`);
            piezaEncontrada[valor] = nuevoValor;
            break;
        default:
            alert("Valor no reconocido.");
            return;
    }

    // Recalcular el volumen si alguno de los valores numéricos cambia
    if (["largo", "ancho", "grosor"].includes(valor)) {
        piezaEncontrada.volumen = calcularVolumen(piezaEncontrada.largo, piezaEncontrada.ancho, piezaEncontrada.grosor);
    }

    // Guardar la lista actualizada en localStorage
    localStorage.setItem("piezas", JSON.stringify(piezas));
    console.log("Piezas actualizadas:", piezas); // Depuración

    // Recargar la tabla
    document.getElementById("bodyPiezas").innerHTML = "";
    cargarPiezasGuardadas();
    alert("Pieza modificada correctamente.");
}
