const submenuBtns = document.querySelectorAll('.submenu-btn');
submenuBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const submenu = btn.nextElementSibling;
        if (submenu) {
            submenu.classList.toggle('open');
        }
    });
});

class vuelo {
    constructor(codigo, plazas, importe) {
        this.codigo = codigo;
        this.plazas = plazas;
        this.importe = importe;
    }
}

class VueloMuyRentable {
    constructor(codigo, ingreso) {
        this.codigo = codigo;
        this.ingreso = ingreso;
    }
}

const vuelos = [];
const vuelosFueraDeRango = [];


function anadirvuelo(codigo, plazas, importe) {
    if (!codigo || plazas < 0 || importe < 0) {
        alert("Datos inválidos.");
        return;
    }
    vuelos.push({ codigo, plazas, importe });
    mostrarvuelos();
}


    function modificarvuelo(codigo, nuevoplazas, nuevaimporte) {
        const vuelo = vuelos.find(p => p.codigo === codigo);
        if (vuelo) {
            vuelo.plazas = nuevoplazas;
            vuelo.importe = nuevaimporte;
            mostrarvuelos();
        } else {
            alert("vuelo no encontrada.");
        }
    }

    function calcularIngreso() {
        vuelosFueraDeRango.length = 0;
        $('#tablavuelos tbody').empty();
        $('#tablaMuyRentables tbody').empty();

        vuelos.forEach(vuelo => {
            const ingreso = vuelo.plazas *vuelo.importe;
            let categoria;
            if (ingreso <= 10000) categoria = "Poco Rentable";
            else if (ingreso <= 20000) categoria = "Rentable";
            else categoria = "Muy Rentable";

            $('#tablavuelos tbody').append(`
                <tr>
                    <td>${vuelo.codigo}</td>
                    <td>${vuelo.plazas}</td>
                    <td>${vuelo.importe} €</td>
                    <td>${ingreso.toFixed(2)} €</td>
                    <td>${categoria}</td>
                </tr>
            `);

            if (categoria == "Muy Rentable") {
                vuelosFueraDeRango.push({ codigo: vuelo.codigo, ingreso: ingreso.toFixed(2) });
                $('#tablaMuyRentables tbody').append(`
                    <tr>
                        <td>${vuelo.codigo}</td>
                        <td>${vuelo.plazas}</td>
                        <td>${ingreso.toFixed(2)} €</td>
                        <td>${vuelo.importe} €</td>
                    </tr>
                `);
            }
            
        });
    }

    function mostrarvuelos() {
        $('#tablavuelos tbody').empty();
        vuelos.forEach(vuelo => {
            $('#tablavuelos tbody').append(`
                <tr>
                    <td>${vuelo.codigo}</td>
                    <td>${vuelo.plazas}</td>
                    <td>${vuelo.importe} €</td>
                </tr>
            `);
        });
    }

    $('#formAnadir').submit(function(e) {
        let tabla = document.getElementById("bodyPiezas");
        e.preventDefault();
        const codigo = $('#codigo').val();
        const plazas = parseFloat($('#plazas').val());
        const importe = parseFloat($('#importe').val());
        anadirvuelo(codigo, plazas, importe);
        $(this).trigger('reset');
    });

    $('#formModificar').submit(function(e) {
        e.preventDefault();
        const codigo = $('#modcodigo').val();
        const nuevoplazas   = parseFloat($('#modplazas').val());
        const nuevaimporte = parseFloat($('#modimporte').val());
        modificarvuelo(codigo, nuevoplazas, nuevaimporte);
        $(this).trigger('reset');
    });

    $('#calcularIngreso').click(function() {
        calcularIngreso();
    })