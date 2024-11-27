document.addEventListener("DOMContentLoaded", () => {
    // Cargar pedidos guardadas al cargar la página
    cargarpedidosGuardadas();
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
// Función para añadir una nueva pedido
function addpedido() {
    let numeropedido = prompt("Número de pedido:");
    let cliente = prompt("Cliente:");
    let fecha = prompt("Fecha:");
    let procesado = prompt("Procesado:");
    let servido = prompt("Servido:");

    if (numeropedido && cliente && fecha && procesado && servido) {
        // Crear un objeto con los datos de la pedido
        let nuevapedido = {
            numeropedido,
            cliente,
            fecha,
            procesado,
            servido
        };

        // Guardar la pedido en localStorage
        guardarpedido(nuevapedido);

        // Agregar la pedido a la tabla visual
        agregarpedidoATabla(nuevapedido);
    } else {
        alert("Por favor, completa todos los campos.");
    }
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

function modificarPedido(pedidos) {
    let numeropedido = prompt("Introduce el número del pedido para modificar:");
    if (!numeropedido) {
        alert("Número de pedido no válido.");
        return;
    }

    let valor = prompt("¿Qué valor quieres cambiar del pedido?").toLowerCase();
    let nuevoValor;

    switch (valor) {

        case "número":
        case "número":
        case "Número":
        case "Numero":
            nuevoValor = prompt("Nuevo número del pedido:");
            break;
        case "cliente":
        case "Cliente":
            nuevoValor = prompt("Nueva Cliente del pedido:");
            break;
        case "fecha":
        case "Fecha":
            nuevoValor = prompt("Nueva Fecha del pedido:");
            break;
        case "Procesado":
        case "procesado":
            nuevoValor = prompt("Nuevo Procesado del pedido:");
            break;
        case "Servido":
        case "servido":
            nuevoValor = prompt("Nuevo Servido del pedido:");
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