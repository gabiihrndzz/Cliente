import MiClaseImportada, {hola} from '.modulo-export.js';
import * as todo from './modulo-export.js';
let br = '<br>';
document.write(br, hola());
console.log(hola());
const miObjeto = newMiClaseImportada();
console.log(miObjeto.adios());
br;
console.log(todo.hola());
const miObjeto2= new todo.default();



