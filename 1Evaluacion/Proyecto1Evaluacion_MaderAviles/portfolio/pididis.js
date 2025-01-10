document.addEventListener("DOMContentLoaded", () => {
    cargarpedidosGuardadas();
    cargarPiezasGuardadas();
});

// Control de submenús
const submenuBtns = document.querySelectorAll('.submenu-btn');
submenuBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const submenu = btn.nextElementSibling;
        if (submenu) submenu.classList.toggle('open');
    });
});

// Funciones para las piezas
function addPieza() {
    let numeroPieza = prompt("Número de pieza:");
    if (!numeroPieza || !Number.isInteger(Number(numeroPieza)) || numeroPieza < 1) {
        alert("Número de pieza inválido. Debe ser un número entero mayor o igual a 1.");
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

function modificarPieza() {
    let numeroPieza = prompt("Introduce el número de la pieza para modificar:");
    if (!numeroPieza) {
        alert("Número de pieza no válido.");
        return;
    }

    let piezas = JSON.parse(localStorage.getItem("piezas")) || [];
    let piezaIndex = piezas.findIndex(pieza => pieza.numeroPieza === numeroPieza);

    if (piezaIndex === -1) {
        alert("No se encontró la pieza con ese número.");
        return;
    }

    let valor = prompt("¿Qué valor quieres cambiar de la pieza? (largo, ancho, grosor, color, superficie):").toLowerCase();
    let nuevoValor;

    if (["largo", "ancho", "grosor"].includes(valor)) {
        nuevoValor = parseFloat(prompt(`Nuevo valor para ${valor}:`));
        if (isNaN(nuevoValor) || nuevoValor <= 0) {
            alert(`${valor} no válido. Debe ser un número positivo.`);
            return;
        }
        piezas[piezaIndex][valor] = nuevoValor;
        piezas[piezaIndex].volumen = calcularVolumen(piezas[piezaIndex].largo, piezas[piezaIndex].ancho, piezas[piezaIndex].grosor);
    } else if (["color", "superficie"].includes(valor)) {
        nuevoValor = prompt(`Nuevo valor para ${valor}:`);
        piezas[piezaIndex][valor] = nuevoValor;
    } else {
        alert("Valor no reconocido.");
        return;
    }

    localStorage.setItem("piezas", JSON.stringify(piezas));
    actualizarFilaPieza(numeroPieza, piezas[piezaIndex]);
    alert("Pieza modificada correctamente.");
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

// Funciones para los pedidos
function addPedido() {
    let numeroPedido = prompt("Número de pedido:");
    if (!numeroPedido || !Number.isInteger(Number(numeroPedido)) || numeroPedido < 1) {
        alert("Número de pedido inválido. Debe ser un número entero mayor o igual a 1.");
        return;
    }

    let pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];
    if (pedidos.some(pedido => pedido.numeroPedido === numeroPedido)) {
        alert("El número de pedido ya existe.");
        return;
    }

    let cliente = prompt("Cliente:");
    let fecha = prompt("Fecha (YYYY-MM-DD):");
    if (!isValidDate(fecha)) {
        alert("Fecha no válida. Formato correcto: YYYY-MM-DD.");
        return;
    }

    let procesado = prompt("Procesado (si/no):").toLowerCase();
    let servido = prompt("Servido (si/no):").toLowerCase();
    if (!["si", "no"].includes(procesado) || !["si", "no"].includes(servido)) {
        alert("Procesado y Servido deben ser 'si' o 'no'.");
        return;
    }

    let nuevoPedido = { numeroPedido, cliente, fecha, procesado, servido };
    guardarPedido(nuevoPedido);
    agregarPedidoATabla(nuevoPedido);
    alert("Pedido añadido correctamente.");
}

function modificarPedido() {
    let numeroPedido = prompt("Introduce el número del pedido para modificar:");
    if (!numeroPedido) {
        alert("Número de pedido no válido.");
        return;
    }

    let pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];
    let pedidoEncontrado = pedidos.find(pedido => pedido.numeroPedido === numeroPedido);

    if (!pedidoEncontrado) {
        alert("No se encontró el pedido con ese número.");
        return;
    }

    let valor = prompt("¿Qué valor quieres cambiar del pedido? (cliente, fecha, procesado, servido):").toLowerCase();
    let nuevoValor;

    if (valor === "fecha") {
        nuevoValor = prompt("Nueva fecha (YYYY-MM-DD):");
        if (!isValidDate(nuevoValor)) {
            alert("Fecha no válida. Formato correcto: YYYY-MM-DD.");
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

    localStorage.setItem("pedidos", JSON.stringify(pedidos));
    document.getElementById("bodyPedidos").innerHTML = "";
    cargarpedidosGuardadas();
    alert("Pedido modificado correctamente.");
}

// Utilidades
function isValidDate(dateString) {
    const regEx = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateString.match(regEx)) return false;
    const date = new Date(dateString);
    return dateString === date.toISOString().split('T')[0];
}

function calcularVolumen(largo, ancho, grosor) {
    return (parseFloat(largo * ancho * grosor) / 1000000);
}

function guardarPieza(pieza) {
    let piezas = JSON.parse(localStorage.getItem("piezas")) || [];
    piezas.push(pieza);
    localStorage.setItem("piezas", JSON.stringify(piezas));
}

function guardarPedido(pedido) {
    let pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];
    pedidos.push(pedido);
    localStorage.setItem("pedidos", JSON.stringify(pedidos));
}

function cargarPiezasGuardadas() {
    let piezas = JSON.parse(localStorage.getItem("piezas")) || [];
    piezas.forEach(pieza => agregarPiezaATabla(pieza));
}

function cargarpedidosGuardadas() {
    let pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];
    pedidos.forEach(pedido => agregarPedidoATabla(pedido));
}
