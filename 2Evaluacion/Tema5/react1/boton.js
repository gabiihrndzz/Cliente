function Boton() {
const [color, setColor] = React.useState("hsl(0, 50%, 50%)");
// Se extrae la función del handler
const handleClick = () => {
    setColor(`hsl(${Math.random() * 360}, 80%, 50%)`);
};
return React.createElement(
    "button",
        {
            onClick: handleClick,
            style: {
                backgroundColor: color,
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
            },
        },
        "Cambia el color"
    );
};

const nodoRaiz=document.getElementById('boton');
const raiz=ReactDOM.createElement(nodoRaiz);
const boton=React.getElementById(Boton);
raiz.render(boton);