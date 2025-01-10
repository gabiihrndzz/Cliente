const titulos = [
    {
        titulo: "Las cinco semillas de naranja",
        subtitulo: "La entrega de la carta"
    },
    {
        titulo: "Estudio en escarlata",
        subtitulo: "Dr Watson meets Sherlock"
    },
    {
        titulo: "Baskervilles dog",
        subtitulo: "Un perro misterioso"
    }
];

class TarjetaBlog extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const shadowRoot = this.shadowRoot;
        const nodoPlantilla = document.getElementById('plantilla-tarjeta');

        if (nodoPlantilla) {
            shadowRoot.innerHTML = "";  // Limpia el Shadow DOM antes de agregar tarjetas nuevas
            titulos.forEach((t) => {
                const instancia = document.importNode(nodoPlantilla.content, true);
                instancia.querySelector('.titulo').innerHTML = t.titulo;
                instancia.querySelector('.subtitulo').innerHTML = t.subtitulo;
                shadowRoot.appendChild(instancia); // Agrega la instancia directamente al shadowRoot
            });
        } else {
            shadowRoot.innerHTML = "<p>Ha fallado la carga de la plantilla. Vuelva a intentarlo más tarde.</p>";
        }
    }
}

// Define el nuevo elemento personalizado
customElements.define('tarjeta-blog', TarjetaBlog);
