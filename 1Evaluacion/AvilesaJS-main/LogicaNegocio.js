import { Linea } from "./DataObjects.js";
//
var lineas;

function actualizaLocal() {
  localStorage.setItem("lineas", JSON.stringify(lineas));
}

function inicializa() {
  lineas = []; 
  lineas.push(new Linea(1, "Avilés", "Piedras Blancas", "08:00", "00:15"));
  lineas.push(new Linea(2, "Avilés", "Gijón-La Laboral", "09:00", "01:00"));
  actualizaLocal();
}

function reinicializa() {
  localStorage.removeItem("lineas");
  inicializa();
}
function getLineas() {
  return JSON.parse(localStorage.getItem("lineas"));
}

function insertaLinea(numero, origen, destino, horaSalida, intervalo) {
  if (!lineas) lineas = getLineas();
  lineas.push(new Linea(numero, origen, destino, horaSalida, intervalo));
  lineas.sort(comparerLineas);
  actualizaLocal();
}

function eliminaLineaPorNumero(numero) {
  if (!lineas) lineas = getLineas();
  lineas = lineas.filter((l) => l.Numero !== numero);
  actualizaLocal();
}

function modificarLineaPorNumero(
  numero,
  nuevoOrigen,
  nuevoDestino,
  nuevaHoraSalida,
  nuevoIntervalo
) {
  if (!lineas) lineas = getLineas();

  let encontrada = lineas.find((l) => l.Numero === numero);
  
  if (encontrada) {
    encontrada.Origen = nuevoOrigen;
    encontrada.Destino = nuevoDestino;
    encontrada.HoraSalida = nuevaHoraSalida;
    encontrada.Intervalo = nuevoIntervalo;
    actualizaLocal();
  }
}
function comparerLineas(l1, l2) {
  if (l1.Numero > l2.Numero) return 1;
  else if (l1.Numero < l2.Numero) return -1;
  else return 0;
}

const existeLinea = (numero) => {
  if (!lineas) lineas = getLineas(); 
  return lineas.some(n => n.Numero === numero);
}

const loadData = function () {
  let lineas = getLineas();
  let tblBody = document.getElementById("tblLineas").querySelector("tbody");

  if (!tblBody) {
    tblBody = document.createElement("tbody");
    document.getElementById("tblLineas").appendChild("tbody");
  }
  tblBody.innerHTML = "";
  lineas.forEach((l) => {
    let fila = document.createElement("tr");
    let tdNumero = document.createElement("td");
    tdNumero.textContent = l.Numero;
    let tdOrigen = document.createElement("td");
    tdOrigen.textContent = l.Origen;
    let tdDestino = document.createElement("td");
    tdDestino.textContent = l.Destino;
    let tdHoraSalida = document.createElement("td");
    tdHoraSalida.textContent = l.HoraSalida;
    let tdIntervalo = document.createElement("td");
    tdIntervalo.textContent = l.Intervalo;
    fila.appendChild(tdNumero);
    fila.appendChild(tdOrigen);
    fila.appendChild(tdDestino);
    fila.appendChild(tdHoraSalida);
    fila.appendChild(tdIntervalo);
    tblBody.appendChild(fila);
  });
};

const getLineaPorNumero = () => getLineas().find((l) => l.Numero === numero);

const importMethods = () => {
  window.reinicializa = reinicializa;
  window.inicializa = inicializa;
  window.getLineas = getLineas;
  window.insertaLinea = insertaLinea;
  window.eliminaLineaPorNumero = eliminaLineaPorNumero;
  window.modificarLineaPorNumero = modificarLineaPorNumero;
  window.loadData = loadData;
  window.existeLinea = existeLinea;
  window.checkHora = checkHora;
};

importMethods();
