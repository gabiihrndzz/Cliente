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
        piezas[piezaIndex].volumen = calcularVolumen(piezas[piezaIndex].largo, piezas[piezaIndex].ancho, piezas[piezaIndex].grosor); // Recalcular volumen
    } else if (valor === "color" || valor === "superficie") {
        nuevoValor = prompt(`Nuevo valor para ${valor}:`);
        piezas[piezaIndex][valor] = nuevoValor;
    } else {
        alert("Valor no reconocido.");
        return;
    }

    localStorage.setItem("piezas", JSON.stringify(piezas));

    // Actualizar solo la fila modificada en la tabla
    actualizarFilaPieza(numeroPieza, piezas[piezaIndex]);

    alert("Pieza modificada correctamente.");
}

function actualizarFilaPieza(numeroPieza, piezaActualizada) {
    let tabla = document.getElementById("bodyPiezas").rows;
    for (let i = 0; i < tabla.length; i++) {
        if (tabla[i].cells[0].innerText === numeroPieza) {
            tabla[i].cells[1].innerText = piezaActualizada.largo;
            tabla[i].cells[2].innerText = piezaActualizada.ancho;
            tabla[i].cells[3].innerText = piezaActualizada.grosor;
            tabla[i].cells[4].innerText = piezaActualizada.color;
            tabla[i].cells[5].innerText = piezaActualizada.superficie;
            tabla[i].cells[6].innerText = piezaActualizada.volumen; 
            break;
        }
    }
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

function consultarPieza() { 
    let numeropieza = prompt("Introduce el número de la pieza para consultar:");
    
    if (!numeropieza) {
        alert("Número de pieza no válido.");
        return;
    }
    let piezas = JSON.parse(localStorage.getItem("piezas")) || []; // Corregido 'pedidos' a 'piezas'
    let piezaEncontrada = piezas.find(pieza => pieza.numeroPieza === numeropieza); // Corregido búsqueda

    if (!piezaEncontrada) {
        alert("No se encontró una pieza con ese número.");
        return;
    }

    let detallesPieza = `
        Número de Pieza: ${piezaEncontrada.numeroPieza}\n
        Largo: ${piezaEncontrada.largo} cm\n
        Ancho: ${piezaEncontrada.ancho} cm\n
        Grosor: ${piezaEncontrada.grosor} cm\n
        Color: ${piezaEncontrada.color}\n
        Superficie: ${piezaEncontrada.superficie}\n
        Volumen: ${piezaEncontrada.volumen} m³
    `;
    
    alert(detallesPieza);
}

function addpedido() {
    let numeropedido = prompt("Número de pedido:");
    if (!numeropedido || !Number.isInteger(Number(numeropedido)) || numeropedido < 1) {
        alert("Número de pedido inválido. Debe ser un número entero mayor o igual a 1.");
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

function modificarPedido() {
    let numeroPedido = prompt("Introduce el número del pedido para modificar:");
    if (!numeroPedido) {
        alert("Número de pedido no válido.");
        return;
    }
function isValidDate(dateString) {
    const regEx = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateString.match(regEx)) return false;

    const date = new Date(dateString);  

    return dateString === date.toISOString().split('T')[0];
}
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

        if (!isValidDate(nuevoValor)) {
            alert("Fecha no válida. El formato correcto es YYYY-MM-DD.");
            return;
        }

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

    localStorage.setItem("pedidos", JSON.stringify(pedidos));

    document.getElementById("bodypedidos").innerHTML = "";
    cargarpedidosGuardadas();
    alert("Pedido modificado correctamente.");
}

function guardarpedido(pedido) {
    let pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];
    pedidos.push(pedido);
    localStorage.setItem("pedidos", JSON.stringify(pedidos));
}

function cargarpedidosGuardadas() {
    let pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];
    pedidos.forEach(pedido => agregarpedidoATabla(pedido));
}

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

    localStorage.setItem("pedidos", JSON.stringify(nuevaspedidos));

    document.getElementById("bodypedidos").innerHTML = "";
    cargarpedidosGuardadas();
}

function consultarPedido() {
    let numeropedido = prompt("Introduce el número del pedido para consultar:");
    
    if (!numeropedido) {
        alert("Número de pedido no válido.");
        return;
    }
    let pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];
    let pedidoEncontrado = pedidos.find(pedido => pedido.numeropedido === numeropedido);

    if (!pedidoEncontrado) {
        alert("No se encontró un pedido con ese número.");
        return;
    }

    let detallesPedido = `
        Número de Pedido: ${pedidoEncontrado.numeropedido}\n
        Cliente: ${pedidoEncontrado.cliente}\n
        Fecha: ${pedidoEncontrado.fecha}\n
        ¿Procesado? ${pedidoEncontrado.procesado}\n
        ¿Servido? ${pedidoEncontrado.servido}
    `;
    
    alert(detallesPedido);
    
}